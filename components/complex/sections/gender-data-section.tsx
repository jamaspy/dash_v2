import { getGendersByStage } from "@/actions/genders-by-stage";
import {
  PieChartComponent,
  BarChartComponent,
  LineChartComponent,
} from "../charts";

import { getGendersBySplit } from "@/actions/genders-by-split";
import { getHiresByMonth } from "@/actions";
import { ChartContainer } from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export const GenderDataSection = async () => {
  const [gendersByStage, genderSplits, genderPlacements, hiresByMonth] =
    await Promise.all([
      getGendersByStage(),
      getGendersBySplit("split"),
      getGendersBySplit("placements"),
      getHiresByMonth(),
    ]);

  return (
    <div className="flex flex-row gap-4">
      <BarChartComponent chartData={gendersByStage} />
      <PieChartComponent
        splitData={genderSplits}
        placementData={genderPlacements}
      />
      <Card className="bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 shadow-none">
        <CardHeader>
          <CardTitle>Placements Against Target</CardTitle>
          <CardDescription>
            Overview of the numbers for each gender at each stage of the
            recruitment life cycle.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}}>
            <LineChartComponent
              chartData={hiresByMonth}
              xAxisLabel="month"
              yAxisLabel="hires"
              targetLabel="target"
            />
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};
