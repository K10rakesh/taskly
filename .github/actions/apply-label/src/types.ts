export interface ApiContext {
    owner: string;
    repo: string;
    issue_number: number;
}

export type LabelMappings = Record<string, string>;