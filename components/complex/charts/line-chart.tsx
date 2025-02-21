"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";


const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
    tablet: {
        label: "Tablet",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig;

type ResponseData = {
    month: string;
    hires: number;
    target: number;
};

export function LineChartComponent({
    chartData,
}: {
    chartData: ResponseData[];
}) {
    return (
        <ChartContainer
            config={chartConfig}
            className="min-h-[50px] w-full flex-1 mx-auto flex items-center justify-center"
        >
            <LineChart
                className="flex flex-col items-center justify-center mx-auto w-full flex-1"
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 6,
                    right: 6,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={true}
                    tickMargin={8}
                // tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                    tickLine={false}
                    dataKey={"hires"}
                    axisLine={false}
                    tickMargin={8}
                // tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                    dataKey="hires"
                    type="monotone"
                    stroke="var(--chart-4)"
                    strokeWidth={2}
                    dot
                />

                <Line
                    dataKey="target"
                    type="monotone"
                    stroke="var(--chart-2)"
                    strokeWidth={2}
                    label="false"
                    dot={false}
                />
            </LineChart>
        </ChartContainer>
    );
}
