import * as core from "@actions/core";
import * as github from "@actions/github";

import { ApiContext, LabelMappings } from "./types";

export function findMatchingValue(
    source: string,
    labelMappings: LabelMappings
): string | null {
    for (const [prefix, label] of Object.entries(labelMappings)) {
        if (source.startsWith(prefix)) {
            return label;
        }
    }

    return null;
}

export async function removeManagedLabels(
    octokit: ReturnType<typeof github.getOctokit>,
    apiContext: ApiContext,
    existingLabels: { name: string }[],
    managedLabels: string[]
): Promise<void> {

    for (const label of existingLabels) {

        if (!managedLabels.includes(label.name)) {
            continue;
        }

        await octokit.rest.issues.removeLabel({
            ...apiContext,
            name: label.name
        });
    }
}

export async function applySelectedLabel(
    octokit: ReturnType<typeof github.getOctokit>,
    apiContext: ApiContext,
    selectedLabel: string | null
): Promise<void> {

    if (!selectedLabel) {
        core.warning("No matching label found.");
        return;
    }

    await octokit.rest.issues.addLabels({
        ...apiContext,
        labels: [selectedLabel]
    });

    core.info(
        `Applied label '${selectedLabel}' to #${apiContext.issue_number}.`
    );
}