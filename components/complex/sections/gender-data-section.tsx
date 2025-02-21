import { getGendersByStage } from "@/actions/genders-by-stage"
import { PieChartComponent, BarChartComponent } from "../charts"

import { getGendersBySplit } from "@/actions/genders-by-split"
export const GenderDataSection = async () => {
    const [gendersByStage, genderSplits, genderPlacements] = await Promise.all([
        getGendersByStage(),
        getGendersBySplit("split"),
        getGendersBySplit("placements")
    ])
    return (
        <div className="flex flex-row gap-4">
            <PieChartComponent splitData={genderSplits} placementData={genderPlacements} />
            <BarChartComponent chartData={gendersByStage} />
        </div>
    )
}