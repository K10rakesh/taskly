import * as core from "@actions/core";
import { GitHub } from "@actions/github/lib/utils";

import {
    GitHubContext,
    PullRequest
} from "./types";

const SIZE_LABELS = [
    "size: XS",
    "size: S",
    "size: M",
    "size: L",
    "size: XL"
];

export async function getPullRequest(
    octokit: InstanceType<typeof GitHub>,
    context: GitHubContext,
    pullNumber: number
): Promise<PullRequest> {

    const { data } = await octokit.rest.pulls.get({
        owner: context.owner,
        repo: context.repo,
        pull_number: pullNumber
    });

    return {
        number: data.number,
        additions: data.additions,
        deletions: data.deletions
    };
}

export async function removeSizeLabels(
    octokit: InstanceType<typeof GitHub>,
    context: GitHubContext,
    issueNumber: number
): Promise<void> {

    const { data: labels } =
        await octokit.rest.issues.listLabelsOnIssue({
            owner: context.owner,
            repo: context.repo,
            issue_number: issueNumber
        });

    for (const label of labels) {

        if (!SIZE_LABELS.includes(label.name)) {
            continue;
        }

        try {

            await octokit.rest.issues.removeLabel({
                owner: context.owner,
                repo: context.repo,
                issue_number: issueNumber,
                name: label.name
            });

            core.info(`Removed '${label.name}'.`);

        }
        catch {

            core.warning(
                `Could not remove '${label.name}'.`
            );

        }

    }

}

export async function addSizeLabel(
    octokit: InstanceType<typeof GitHub>,
    context: GitHubContext,
    issueNumber: number,
    label: string
): Promise<void> {

    await octokit.rest.issues.addLabels({
        owner: context.owner,
        repo: context.repo,
        issue_number: issueNumber,
        labels: [label]
    });

    core.info(`Applied '${label}'.`);

}