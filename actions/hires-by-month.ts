'use server'

export const getHiresByMonth = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hires-by-month/2336423`)
    const data = await response.json()
    const chartData =
        data &&
        data?.map((item: any) => ({
            month: item.month,
            hires: item.hires,
            target: 8,
        }));
    return chartData
}
