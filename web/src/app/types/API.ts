import { CaseMetadata } from './case';

export interface APIResponse<T> {
  data: T;
  count: number;
}

export interface User {
  username: string;
  groups: string[];
}

export interface Identity {
  users: string[];
  groups: string[];
}

export interface Info {
  api: string;
  version: string;
}

export interface Constant {
  banner: string;
  allow_empty_acs?: boolean;
}

export interface Service {
  name: string;
  xref: string;
  api_url: string;
  metadata: { [key: string]: string };
  case_data?: CaseMetadata;
  status?: string; //Injected in front
}
