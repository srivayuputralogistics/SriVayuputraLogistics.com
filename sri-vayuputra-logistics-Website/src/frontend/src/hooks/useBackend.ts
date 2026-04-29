import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { ContactSubmission } from "../types";

// Backend interface may not be generated yet; cast to any for resilience
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BackendActor = Record<string, (...args: unknown[]) => Promise<unknown>>;

export function useGetSubmissions() {
  const { actor, isFetching } = useActor(createActor);
  const a = actor as BackendActor | null;
  return useQuery<ContactSubmission[]>({
    queryKey: ["submissions"],
    queryFn: async () => {
      if (!a) return [];
      const result = await a.getSubmissions();
      return result as ContactSubmission[];
    },
    enabled: !!a && !isFetching,
  });
}

export function useGetSubmissionCount() {
  const { actor, isFetching } = useActor(createActor);
  const a = actor as BackendActor | null;
  return useQuery<bigint>({
    queryKey: ["submissionCount"],
    queryFn: async () => {
      if (!a) return BigInt(0);
      return a.getSubmissionCount() as Promise<bigint>;
    },
    enabled: !!a && !isFetching,
  });
}

export function useSubmitContact() {
  const { actor } = useActor(createActor);
  const a = actor as BackendActor | null;
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      email: string;
      requirement: string;
      message: string;
    }) => {
      if (!a) throw new Error("Actor not ready");
      return a.submitContact(
        data.name,
        data.phone,
        data.email,
        data.requirement,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
      queryClient.invalidateQueries({ queryKey: ["submissionCount"] });
    },
  });
}
