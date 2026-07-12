import * as core from "@actions/core";

export async function writeSummary(
    additions: number,
    deletions: number,
    label: string
): Promise<void> {

    const total = additions + deletions;

    await core.summary
        .addHeading("Pull Request Size")
        .addTable([
            [
                { data: "Metric", header: true },
                { data: "Value", header: true }
            ],
            [
                "Additions",
                additions.toString()
            ],
            [
                "Deletions",
                deletions.toString()
            ],
            [
                "Total",
                total.toString()
            ],
            [
                "Applied Label",
                label
            ]
        ])
        .write();

}