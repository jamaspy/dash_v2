'use server'

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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hires-by-month/2336423`)
    const data = await response.json()

    const chartData =
        data &&
        data?.map((item: HireData) => ({
            month: item.month,
            hires: item.hires,
            target: 8,
        }));
    return chartData
}
