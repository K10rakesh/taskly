import * as core from "@actions/core";
import * as github from "@actions/github";

import fs from "node:fs";
import path from "node:path";

import { LabelsConfig, RepositoryLabel } from "./types";

async function syncLabels(): Promise<void> {

    try {

        const token = core.getInput("github-token");
        const prune = core.getBooleanInput("prune");
        const dryRun = core.getBooleanInput("dry-run");

        core.info(`Prune: ${prune}`);
        core.info(`Dry Run: ${dryRun}`);

        if (!token) {
            throw new Error("Input 'github-token' is required.");
        }

        const workspace = process.env.GITHUB_WORKSPACE;

        if (!workspace) {
            throw new Error("GITHUB_WORKSPACE is not defined.");
        }

        const octokit = github.getOctokit(token);
        const context = github.context;

        const configPath = path.join(
            workspace,
            "config",
            "labels.json"
        );

        const config = JSON.parse(
            fs.readFileSync(configPath, "utf8")
        ) as LabelsConfig;

        const desiredLabels = config.labels.map(label => ({
            ...label,
            color: label.color.toLowerCase()
        }));

        const seen = new Set<string>();

        for (const label of desiredLabels) {

            if (seen.has(label.name)) {
                throw new Error(
                    `Duplicate label '${label.name}' found in labels.json.`
                );
            }

            seen.add(label.name);

        }

        const existingLabels: RepositoryLabel[] =
            await octokit.paginate(
                octokit.rest.issues.listLabelsForRepo,
                {
                    owner: context.repo.owner,
                    repo: context.repo.repo,
                    per_page: 100
                }
            );

        const existingLabelMap =
            new Map<string, RepositoryLabel>(
                existingLabels.map(label => [
                    label.name,
                    label
                ])
            );

        core.info(
            `Loaded ${desiredLabels.length} configured labels.`
        );

        core.info(
            `Found ${existingLabels.length} repository labels.`
        );

        for (const desiredLabel of desiredLabels) {

            const existingLabel =
                existingLabelMap.get(desiredLabel.name);

            if (!existingLabel) {

                if (dryRun) {

                    core.info(
                        `[Dry Run] Would create '${desiredLabel.name}'.`
                    );

                }
                else {

                    await octokit.rest.issues.createLabel({
                        owner: context.repo.owner,
                        repo: context.repo.repo,
                        name: desiredLabel.name,
                        color: desiredLabel.color,
                        description: desiredLabel.description
                    });

                    core.info(
                        `Created '${desiredLabel.name}'.`
                    );

                }

                continue;

            }

            if (
                existingLabel.color !== desiredLabel.color ||
                (existingLabel.description ?? "") !== desiredLabel.description
            ) {

                if (dryRun) {

                    core.info(
                        `[Dry Run] Would update '${desiredLabel.name}'.`
                    );

                }
                else {

                    await octokit.rest.issues.updateLabel({
                        owner: context.repo.owner,
                        repo: context.repo.repo,
                        name: desiredLabel.name,
                        color: desiredLabel.color,
                        description: desiredLabel.description
                    });

                    core.info(
                        `Updated '${desiredLabel.name}'.`
                    );

                }

                continue;

            }

            core.info(
                `Skipping '${desiredLabel.name}'.`
            );

        }

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

syncLabels();