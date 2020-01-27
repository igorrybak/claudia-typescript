import * as ApiBuilder from "claudia-api-builder";

/**
 * Creates routes with paths according to AWS Lambda rules.
 */
export const lambdaRouter = () => {
    const api = new ApiBuilder();

    api.get("/", (event: any) => {
        console.debug("Request:\n", event);
        return "Success got GET request";
    });

    api.post("/some-path", async (event: any) => {
        console.debug("Body in ROUTE: ", event.body);
        const { voice } = event.body;

        try {
            if (true) {
                return { message: "ok", body: "OK" };
            } else {
                throw new Error("SOME ERROR");
            }
        } catch (error) {
            console.error("Error on ROUTE: ", error);
            return { message: "error", body: error };
        }
    });

    return api;
};
