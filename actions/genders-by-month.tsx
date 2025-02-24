'use server'

import { auth } from "@/auth";
import { createUrl } from "@/utils/create-url";
import { HEADERS } from "@/utils/headers";
import { Session } from "next-auth";
import { redirect } from "next/navigation";

export const getGendersByMonth = async () => {
    const session: Session | null = await auth()

    if (!session) {
        redirect("/login")
    }

    const { companyId, clientCategories } = session.user;

    const url = createUrl("genders", companyId, { clientCategories }, "distribution")

    console.log("🚀 ~ getGendersByMonth ~ url:", url)
    const response = await fetch(url, HEADERS)
    const data = await response.json()
    return data
}