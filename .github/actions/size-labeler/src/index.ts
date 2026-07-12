import * as core from "@actions/core";
import * as github from "@actions/github";

import {
    addSizeLabel,
    getPullRequest,
    removeSizeLabels
} from "./github";

import { getSizeLabel } from "./labels";
import { writeSummary } from "./summary";

async function run(): Promise<void> {

    try {

        const token = core.getInput("github-token");

        if (!token) {
            throw new Error("Input 'github-token' is required.");
        }

        const pullRequestNumber =
            github.context.payload.pull_request?.number;

        if (!pullRequestNumber) {
            throw new Error(
                "This action must be run on a pull_request event."
            );
        }

        const octokit = github.getOctokit(token);

        const gitHubContext = {
            owner: github.context.repo.owner,
            repo: github.context.repo.repo
        };

        const pullRequest =
            await getPullRequest(
                octokit,
                gitHubContext,
                pullRequestNumber
            );

        const totalChanges =
            pullRequest.additions +
            pullRequest.deletions;

        const label =
            getSizeLabel(totalChanges);

        await removeSizeLabels(
            octokit,
            gitHubContext,
            pullRequest.number
        );

        await addSizeLabel(
            octokit,
            gitHubContext,
            pullRequest.number,
            label
        );

        await writeSummary(
            pullRequest.additions,
            pullRequest.deletions,
            label
        );

        core.info(
            `Applied '${label}' to PR #${pullRequest.number}.`
        );

    }
    catch (err) {

        if (err instanceof Error) {
            core.setFailed(err.message);
        }
        else {
            core.setFailed("Unknown error.");
        }

    }

}

run();