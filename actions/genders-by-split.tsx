'use server'

export const getGendersBySplit = async (type: "split" | "placements") => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/genders/2336423/${type}`)
    const data = await response.json()
    return data
}
