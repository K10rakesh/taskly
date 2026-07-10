import * as core from "@actions/core";

async function run(): Promise<void> {

    try {

        core.info("Starting label synchronization...");

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