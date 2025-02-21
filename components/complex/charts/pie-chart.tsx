"use client"
import { Label, Pie, PieChart } from "recharts"
import { useMemo } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
    count: {
        label: "Candidates",
    },
    Female: {
        label: "Female",
        color: "var(--chart-1)",
    },
    Male: {
        label: "Male",
        color: "var(--chart-2)",
    },
    "Not Identified": {
        label: "Not Identified",
        color: "var(--chart-3)",
    },
} satisfies ChartConfig;

export function PieChartComponent({ splitData, placementData }: { splitData: any, placementData: any }) {

    const splitChartData =
        splitData &&
        splitData?.map((item: any, index: number) => ({
            gender: item.Gender,
            count: item.CountPerGender,
            fill: `var(--chart-${index + 1})`,
        }));

    const placementChartData =
        placementData &&
        placementData?.map((item: any, index: number) => ({
            gender: item.Gender,
            count: item.CountPerGender,
            fill: `var(--chart-${index + 1})`,
        }));

    const totalCandidatesSplit = useMemo(() => {
        return splitChartData?.reduce((acc, curr) => acc + curr.count, 0);
    }, [splitChartData]);

    const totalCandidatesPlacements = useMemo(() => {
        return placementChartData?.reduce((acc, curr) => acc + curr.count, 0);
    }, [placementChartData]);

    return (
        <Card className='shadow-none border-2 bg-zinc-100 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 w-auto'>
            <CardHeader>
                <CardTitle>Gender Diversity Metrics</CardTitle>
                <CardDescription className="text-xs">Overview of the gender diversity across your talent pool and hires.</CardDescription>
            </CardHeader>
            <CardContent className="">
                <div className="flex flex-row items-center justify-between flex-1 w-full">
                    <div className="flex flex-col w-full">
                        <CardTitle>Talent Pool</CardTitle>
                        <CardDescription className="text-xs">Gender diversity across your total talent pool this year.</CardDescription>
                    </div>
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[150px] w-full"
                    >
                        <PieChart>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Pie
                                data={splitChartData}
                                dataKey="count"
                                nameKey="gender"
                                innerRadius={40}
                                outerRadius={50}
                            >
                                <Label
                                    content={({ viewBox }) => {
                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                            return (
                                                <text
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                >
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        className="fill-foreground text-xl font-bold"
                                                    >
                                                        {totalCandidatesSplit}
                                                    </tspan>

                                                </text>
                                            )
                                        }
                                    }}
                                />
                            </Pie>
                        </PieChart>
                    </ChartContainer>
                </div>
            </CardContent>
            <CardContent className="">
                <div className="flex flex-row items-center flex-1 w-full">
                    <div className="flex flex-col w-full">
                        <CardTitle>Hires</CardTitle>
                        <CardDescription className="text-xs">Gender diversity across your hires this year.</CardDescription>
                    </div>
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[150px] w-full"
                    >
                        <PieChart>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Pie
                                data={placementChartData}
                                dataKey="count"
                                nameKey="gender"
                                innerRadius={40}
                                outerRadius={50}
                            >
                                <Label
                                    content={({ viewBox }) => {
                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                            return (
                                                <text
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                >
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        className="fill-foreground text-xl font-bold"
                                                    >
                                                        {totalCandidatesPlacements.toLocaleString()}
                                                    </tspan>

                                                </text>
                                            )
                                        }
                                    }}
                                />
                            </Pie>
                        </PieChart>
                    </ChartContainer>
                </div>
            </CardContent>
        </Card>
    )
}