import { BASE_URL } from "@/models/base-url";

export function createUrl(
    route: string,
    companyId: number,
    params: {
        jobOrderId?: string | null;
        timePeriod?: string | null;
        clientCategories?: string[] | null;
    },
    path?: string
) {
    const baseUrl = path
        ? `${BASE_URL}/${route}/${companyId}/${path}`
        : `${BASE_URL}/${route}/${companyId}`;
    const queryParams: string[] = [];

    if (params.jobOrderId) {
        queryParams.push(`JobOrderID=${params.jobOrderId}`);
    }
    if (params.timePeriod) {
        queryParams.push(`UpdatedAt=${params.timePeriod}`);
    }

    if (params.clientCategories && params.clientCategories.length > 0) {
        // First decode any encoded categories, then join with comma
        const decodedCategories = params.clientCategories.map((category) =>
            decodeURIComponent(category)
        );
        const categoriesString = decodedCategories.join(",");
        queryParams.push(`clientCategories=${categoriesString}`);
    }

    return queryParams.length > 0
        ? `${baseUrl}?${queryParams.join("&")}`
        : baseUrl;
}