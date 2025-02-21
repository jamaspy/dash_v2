'use server'

export async function getMyDeskTotals() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-desk-totals/2336423`)
    const data = await response.json()

    return data[0]
}