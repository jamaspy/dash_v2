export const getGendersByStage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/genders/2336423/stages`)
    const data = await response.json()
    return data
}