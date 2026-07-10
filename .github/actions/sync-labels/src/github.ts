import * as core from "@actions/core";
import * as github from "@actions/github";

import {
    GitHubContext,
    LabelDefinition,
    SyncOptions
} from "./types";

export async function createLabel(
    octokit: ReturnType<typeof github.getOctokit>,
    context: GitHubContext,
    label: LabelDefinition,
    options: SyncOptions
): Promise<void> {

    if (options.dryRun) {
        core.info(`[Dry Run] Would create '${label.name}'.`);
        return;
    }

    await octokit.rest.issues.createLabel({
        owner: context.owner,
        repo: context.repo,
        name: label.name,
        color: label.color,
        description: label.description
    });

    core.info(`Created '${label.name}'.`);
}

export async function updateLabel(
    octokit: ReturnType<typeof github.getOctokit>,
    context: GitHubContext,
    label: LabelDefinition,
    options: SyncOptions
): Promise<void> {

    if (options.dryRun) {
        core.info(`[Dry Run] Would update '${label.name}'.`);
        return;
    }

    await octokit.rest.issues.updateLabel({
        owner: context.owner,
        repo: context.repo,
        name: label.name,
        color: label.color,
        description: label.description
    });

    core.info(`Updated '${label.name}'.`);
}

export async function deleteLabel(
    octokit: ReturnType<typeof github.getOctokit>,
    context: GitHubContext,
    labelName: string,
    options: SyncOptions
): Promise<void> {

    if (options.dryRun) {

        core.info(
            `[Dry Run] Would delete '${labelName}'.`
        );

        return;

    }

    await octokit.rest.issues.deleteLabel({

        owner: context.owner,
        repo: context.repo,
        name: labelName

    });

    core.info(
        `Deleted '${labelName}'.`
    );

}