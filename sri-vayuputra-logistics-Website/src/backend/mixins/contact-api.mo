import Debug "mo:core/Debug";
import List "mo:core/List";
import Types "../types/contact";

mixin (submissions : List.List<Types.ContactSubmission>) {
  public func submitContact(
    name : Text,
    phone : Text,
    email : Text,
    requirement : Text,
    message : Text,
  ) : async Nat {
    Debug.todo();
  };

  public query func getSubmissions() : async [Types.ContactSubmission] {
    Debug.todo();
  };

  public query func getSubmissionCount() : async Nat {
    Debug.todo();
  };
};
