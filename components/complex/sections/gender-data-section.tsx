import { getGendersByStage } from "@/actions/genders-by-stage";
import {
  BarChartComponent,
  HiresByMonthChart,
  GenderSplitPieCharts,
} from "../charts";

import { getGendersBySplit } from "@/actions/genders-by-split";
import { getHiresByMonth } from "@/actions";


export const GenderDataSection = async () => {
  const [gendersByStage, genderSplits, genderPlacements, hiresByMonth] =
    await Promise.all([
      getGendersByStage(),
      getGendersBySplit("split"),
      getGendersBySplit("placements"),
      getHiresByMonth(),
    ]);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <BarChartComponent chartData={gendersByStage} />
      <GenderSplitPieCharts
        splitData={genderSplits}
        placementData={genderPlacements}
      />
      <HiresByMonthChart data={hiresByMonth} />
    </div>
  );
};
