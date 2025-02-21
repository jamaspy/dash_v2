import { TrendingUp, TrendingDown, RefreshCcw, Target } from "lucide-react";

import { DefaultCard, FunnelPiece } from "@/components/complex";
import { getHiresByMonth, getMyDeskTotals } from "@/actions";
import { calculateConversionRate } from "@/lib/utils";
import { LineChartComponent } from "../charts/line-chart";
import { Button } from "@/components/ui";

export const MyDeskTotalsSection = async () => {
    const [myDeskTotals, hiresByMonth] = await Promise.all([
        getMyDeskTotals(),
        getHiresByMonth()
    ])

    return (
        <div className="flex-1 flex flex-col xl:flex-row w-full h-full gap-4 items-center justify-center">
            <div className="grid grid-cols-3 gap-2 w-full xl:w-fit pr-4 border-r-2 border-zinc-300 dark:border-zinc-700">
                <DefaultCard title="Screening" value={myDeskTotals.Screening} icon={<TrendingDown className="w-4 h-4" />} percentage={20} up={false} />
                <DefaultCard title="Submissions" value={myDeskTotals.Approved_Submissions} icon={<TrendingUp className="w-4 h-4" />} percentage={20} up={true} />
                <DefaultCard title="1st Interview" value={myDeskTotals.ClientInterview1} icon={<TrendingDown className="w-4 h-4" />} percentage={20} up={false} />
                <DefaultCard title="Final Interview" value={myDeskTotals.ClientInterviewFinal} icon={<TrendingUp className="w-4 h-4" />} percentage={20} up={true} />
                <DefaultCard title="Offers" value={myDeskTotals.Offer} icon={<TrendingDown className="w-4 h-4" />} percentage={20} up={false} />
                <DefaultCard title="Hired" value={myDeskTotals.Hired} icon={<TrendingUp className="w-4 h-4" />} percentage={20} up={true} />
            </div>

            <div className="flex-1 flex flex-col items-center justify-between gap-1 pr-4 border-r-2 border-zinc-300 dark:border-zinc-700">
                <FunnelPiece title="Talent Pool" value={myDeskTotals.TalentPool} width={14} />
                <FunnelPiece title="Pre-Screening" value={myDeskTotals.PreScreening} width={13} />
                <FunnelPiece title="Connected" value={myDeskTotals.Connected} width={12} />
                <FunnelPiece title="Screening" value={myDeskTotals.Screening} width={11} />
                <FunnelPiece title="Submissions" value={myDeskTotals.Approved_Submissions} width={10} />
                <FunnelPiece title="IV First" value={myDeskTotals.ClientInterview1} width={9} />
                <FunnelPiece title="IV Final" value={myDeskTotals.ClientInterviewFinal} width={8} />
                <FunnelPiece title="Offers" value={myDeskTotals.Offer} width={7} />
                <FunnelPiece title="Hired" value={myDeskTotals.Hired} width={6} />
            </div>

            <div className="flex-1 flex items-center justify-center gap-2">
                <div className="grid grid-cols-2 gap-2 w-full xl:w-fit pr-4 border-r-2 border-zinc-300 dark:border-zinc-700 mx-auto">
                    <DefaultCard value={`${calculateConversionRate(myDeskTotals.Screening, myDeskTotals.Approved_Submissions)}%`} title="Submissions : IV 1" icon={<TrendingDown className="w-4 h-4" />} percentage={20} up={false} />
                    <DefaultCard value={`${calculateConversionRate(myDeskTotals.ClientInterview1, myDeskTotals.ClientInterviewFinal)}%`} title="IV : IV Final" icon={<TrendingUp className="w-4 h-4" />} percentage={50} up={true} />
                    <DefaultCard value={`${calculateConversionRate(myDeskTotals.ClientInterviewFinal, myDeskTotals.Offer)}%`} title="IV Final : Offer" icon={<TrendingDown className="w-4 h-4" />} percentage={54} up={false} />
                    <DefaultCard value={`${calculateConversionRate(myDeskTotals.Offer, myDeskTotals.Hired)}%`} title="Offer : Hire" icon={<TrendingUp className="w-4 h-4" />} percentage={78} up={true} />
                </div>
            </div>

            <div className='flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 w-auto flex-1 max-w-md'>
                <Button className="flex items-center gap-2 self-end">
                    <Target className="w-4 h-4" /> Set Your Target
                </Button>
                <div className="flex flex-col w-full h-full">
                    <p className="text-sm font-bold text-violet-700 dark:text-violet-400">Number Of Hires</p>
                    <LineChartComponent chartData={hiresByMonth} />
                </div>
            </div>

        </div>
    )
}