'use server'

import { auth } from "@/auth";
import { createUrl } from "@/utils/create-url";
import { HEADERS } from "@/utils/headers";
import { Session } from "next-auth";
import { redirect } from "next/navigation";

export async function getMyDeskTotals() {

    const session: Session | null = await auth()

    if (!session) {
        redirect("/login")
    }

    const { companyId, clientCategories } = session.user;

    const url = createUrl("my-desk-totals", companyId, { clientCategories })

    try {
        const response = await fetch(url, HEADERS)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        return data.length > 0 ? data[0] : null
    } catch (error) {
        console.error('Error fetching desk totals:', error)
        return null
    }
}