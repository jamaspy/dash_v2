'use server'

import { auth } from "@/auth"
import { getClientTargetHires } from "./get-users-target-monthly-hires"
import { redirect } from "next/navigation"
import { Session } from "next-auth"
import { createUrl } from "@/utils/create-url"
import { HEADERS } from "@/utils/headers"

export interface HireData {
    month: string
    hires: number
}

export interface HireByMonthOutput {
    month: string
    hires: number
    target: number
}

export const getHiresByMonth = async (): Promise<HireByMonthOutput[]> => {

    const session: Session | null = await auth()

    if (!session) {
        redirect("/login")
    }

    const { companyId, clientCategories } = session.user;

    const url = createUrl("hires-by-month", companyId, { clientCategories })

    console.log("🚀 ~ getHiresByMonth ~ url:", url)
    const response = await fetch(url, HEADERS)
    const data = await response.json()

    const targetHires = await getClientTargetHires()
    const target = targetHires?.hiresTarget

    const chartData =
        data &&
        data?.map((item: HireData) => ({
            month: item.month,
            hires: item.hires,
            target
        }));
    return chartData
}
