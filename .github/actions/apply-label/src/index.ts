import * as core from "@actions/core";
import * as github from "@actions/github";

import fs from "node:fs";
import path from "node:path";

import {
    applySelectedLabel,
    findMatchingValue,
    removeManagedLabels
} from "./utils";

import { ApiContext, LabelMappings } from "./types";

async function applyLabel(): Promise<void> {

    try {

        const mode = core.getInput("mode");

        const token = core.getInput("github-token");

        if (!mode) {
            throw new Error("Input 'mode' is required.");
        }

        if (!token) {
            throw new Error("Input 'github-token' is required.");
        }

        const octokit = github.getOctokit(token);

        const context = github.context;

        const apiContext: ApiContext = {

            owner: context.repo.owner,

            repo: context.repo.repo,

            issue_number: context.issue.number

        };

        const configPath = path.join(
            process.env.GITHUB_WORKSPACE!,
            "config",
            "labels.json"
        );

        const config = JSON.parse(
            fs.readFileSync(configPath, "utf8")
        ) as Record<string, LabelMappings>;

        if (!(mode in config)) {
            throw new Error(`Unsupported mode '${mode}'.`);
        }

        const payload =
            mode === "issue"
                ? context.payload.issue
                : context.payload.pull_request;

        const source =
            mode === "issue"
                ? payload.title
                : payload.head.ref;

        const labelMappings = config[mode];

        const selectedLabel = findMatchingValue(
            source,
            labelMappings
        );

        await removeManagedLabels(
            octokit,
            apiContext,
            payload.labels,
            Object.values(labelMappings)
        );

        await applySelectedLabel(
            octokit,
            apiContext,
            selectedLabel
        );

    }
    catch (err) {

        if (err instanceof Error) {
            core.setFailed(err.message);
        }
        else {
            core.setFailed("Unknown error occurred.");
        }

    }

}

applyLabel();