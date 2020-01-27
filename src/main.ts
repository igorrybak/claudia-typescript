import { lambdaRouter } from "./api/router";

/**
 * Main module for exporting to Lambda.
 */
const app = () => {
    try {
        const router = lambdaRouter();
        return router;
    } catch (error) {
        console.log("Error: ", error);
    }
};

export = app();
