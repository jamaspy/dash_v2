'use client'

import { LineChartComponent } from "../charts";
import { ChartContainer } from "@/components/ui/chart";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";
import { HireByMonthOutput } from "@/actions/hires-by-month";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { revalidateHiresData, updateClientTargetHires } from "@/actions/update-users-target-monthly-hires";
import { toast } from "sonner";

export const HiresByMonthChart = ({ data }: { data: HireByMonthOutput[] }) => {

    const [target, setTarget] = useState(data[0]?.target);
    const [open, setOpen] = useState(false);

    const updateTargetHires = async () => {
        try {
            await updateClientTargetHires(target);
            await revalidateHiresData();
            toast.success("Target hires updated successfully", {
                description: "Your graph will update shortly",
            });
            setOpen(false);
        } catch (error) {
            console.error("Error updating target hires:", error);
            toast.error("Error updating target hires");
        }
    };

    return (
        <Card className="bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 shadow-none">
            <CardHeader className='flex flex-row justify-between items-center gap-4'>
                <div className="flex flex-col gap-2">
                    <CardTitle>Placements Against Target</CardTitle>
                    <CardDescription>
                        Overview of the numbers for each gender at each stage of the
                        recruitment life cycle.
                    </CardDescription>
                </div>
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger><Button variant="outline" ><Target /> Set Target</Button></SheetTrigger>
                    <SheetContent side='top' className="flex flex-col gap-4 items-center justify-center">
                        <SheetHeader className="flex flex-col gap-2 items-center justify-center">
                            <SheetTitle>Set Monthly Hiring Target</SheetTitle>
                            <SheetDescription>
                                Set the agreed monthly hiring target for the year.
                            </SheetDescription>
                            <Input type="number" value={target} onChange={(e) => setTarget(+e.target.value)} />
                            <Button onClick={updateTargetHires}>Set Target</Button>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </CardHeader>
            <CardContent>
                <ChartContainer config={{}}>
                    <LineChartComponent
                        chartData={data}
                        xAxisLabel="month"
                        yAxisLabel="hires"
                        targetLabel="target"
                    />
                </ChartContainer>
            </CardContent>
        </Card>
    )
}