'use server'

export async function getMyDeskTotals() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-desk-totals/2336423`)

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