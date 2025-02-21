"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
import { useMemo } from "react"


const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig
export type ResponseData = {
    Month: string;
    Stage: string;
    Female: number;
    Male: number;
    NotIdentified: number;
};
export function BarChartComponent({ chartData }: { chartData: ResponseData[] }) {

    const data = useMemo(() => {
        if (!chartData) return [];

        const stageData = chartData?.reduce(
            (acc, curr) => {
                if (!acc[curr.Stage]) {
                    acc[curr.Stage] = {
                        stage: curr.Stage.replace(/_/g, " "), // Replace underscores with spaces
                        female: curr.Female,
                        male: curr.Male,
                        notIdentified: curr.NotIdentified,
                        total: curr.Female + curr.Male + curr.NotIdentified,
                    };
                } else {
                    acc[curr.Stage].female += curr.Female;
                    acc[curr.Stage].male += curr.Male;
                    acc[curr.Stage].notIdentified += curr.NotIdentified;
                    acc[curr.Stage].total += curr.Female + curr.Male + curr.NotIdentified;
                }
                return acc;
            },
            {} as Record<
                string,
                {
                    stage: string;
                    female: number;
                    male: number;
                    notIdentified: number;
                    total: number;
                }
            >
        );

        // Convert to array and sort by typical recruitment funnel order
        const stageOrder = [
            "Screening",
            "Approved_Submission",
            "ClientInterview1",
            "ClientInterviewFinal",
            "Offer",
        ];

        return Object.values(stageData).sort(
            (a, b) =>
                stageOrder.indexOf(a.stage.replace(" ", "_")) -
                stageOrder.indexOf(b.stage.replace(" ", "_"))
        );
    }, [chartData]);



    return (
        <Card className='bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 shadow-none'>
            <CardHeader>
                <CardTitle>Gender Split By Stage</CardTitle>
                <CardDescription>Overview of the numbers for each gender at each stage of the recruitment life cycle.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={data}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="stage"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="female" fill="var(--chart-2)" radius={4} />
                        <Bar dataKey="male" fill="var(--chart-1)" radius={4} />
                        <Bar dataKey="notIdentified" fill="var(--chart-3)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
