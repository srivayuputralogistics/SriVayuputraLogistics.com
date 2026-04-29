export interface ContactSubmission {
  id: bigint;
  name: string;
  phone: string;
  email: string;
  requirement: string;
  message: string;
  timestamp: bigint;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface PartnerInfo {
  name: string;
  description: string;
  period: string;
  regions: string[];
}
