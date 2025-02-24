import { auth } from "@/auth";
import { JobTitles } from "@/models/job-titles";
import { createUrl } from "@/utils/create-url";
import { HEADERS } from "@/utils/headers";
import { Session } from "next-auth";
import { redirect } from "next/navigation";

export const getAllOpenJobsTitles = async (): Promise<{ label: string, value: number }[]> => {
    const session: Session | null = await auth()

    if (!session) {
        redirect("/login")
    }

    const { companyId, clientCategories } = session.user;

    const url = createUrl("job-titles", companyId, { clientCategories })

    const response = await fetch(url, HEADERS)

    const data = await response.json()
    return data.map((job: JobTitles) => ({ label: job.JobTitle, value: job.JobOrderId }))
};