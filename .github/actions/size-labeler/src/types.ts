export interface PullRequest {
    number: number;
    additions: number;
    deletions: number;
}

export interface GitHubContext {
    owner: string;
    repo: string;
}