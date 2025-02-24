export const HEADERS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.EXPRESS_API_KEY ?? "",
    },
    next: {
        revalidate: 60,
        stale: 60,
    },
};