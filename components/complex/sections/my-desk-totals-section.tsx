import { TrendingUp, TrendingDown } from "lucide-react";

import { DefaultCard, FunnelPiece } from "@/components/complex";
import { getMyDeskTotals } from "@/actions";
import { calculateConversionRate } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getAllOpenJobsTitles } from "@/actions/get-all-open-jobs-titles";
import { timePeriodOptions } from "@/utils/time-period-options";
import { Filters } from "../filters";
export const MyDeskTotalsSection = async () => {
  const myDeskTotals = await getMyDeskTotals();
  const openJobsTitles = await getAllOpenJobsTitles();
  return (
    <div className="flex flex-col gap-4">
      <Filters openJobsTitles={openJobsTitles} />
      <div className="flex-1 flex flex-col xl:flex-row w-full h-full gap-4 items-center justify-center">
        <div className="grid grid-cols-3 gap-4 w-full lg:w-fit">
          <DefaultCard
            title="Screening"
            value={myDeskTotals.Screening}
            icon={<TrendingDown className="w-4 h-4" />}
            percentage={20}
            up={false}
          />
          <DefaultCard
            title="Submissions"
            value={myDeskTotals.Approved_Submissions}
            icon={<TrendingUp className="w-4 h-4" />}
            percentage={20}
            up={true}
          />
          <DefaultCard
            title="1st Interview"
            value={myDeskTotals.ClientInterview1}
            icon={<TrendingDown className="w-4 h-4" />}
            percentage={20}
            up={false}
          />
          <DefaultCard
            title="Final Interview"
            value={myDeskTotals.ClientInterviewFinal}
            icon={<TrendingUp className="w-4 h-4" />}
            percentage={20}
            up={true}
          />
          <DefaultCard
            title="Offers"
            value={myDeskTotals.Offer}
            icon={<TrendingDown className="w-4 h-4" />}
            percentage={20}
            up={false}
          />
          <DefaultCard
            title="Hired"
            value={myDeskTotals.Hired}
            icon={<TrendingUp className="w-4 h-4" />}
            percentage={20}
            up={true}
          />
        </div>
        <div className="flex-1 flex flex-col xl:flex-row items-center justify-start gap-4">
          <div className="grid grid-cols-2 gap-4 w-full xl:w-fit ">
            <DefaultCard
              value={`${calculateConversionRate(
                myDeskTotals.Screening,
                myDeskTotals.Approved_Submissions
              )}%`}
              title="Submissions : IV 1"
              icon={<TrendingDown className="w-4 h-4" />}
              percentage={20}
              up={false}
            />
            <DefaultCard
              value={`${calculateConversionRate(
                myDeskTotals.ClientInterview1,
                myDeskTotals.ClientInterviewFinal
              )}%`}
              title="IV : IV Final"
              icon={<TrendingUp className="w-4 h-4" />}
              percentage={50}
              up={true}
            />
            <DefaultCard
              value={`${calculateConversionRate(
                myDeskTotals.ClientInterviewFinal,
                myDeskTotals.Offer
              )}%`}
              title="IV Final : Offer"
              icon={<TrendingDown className="w-4 h-4" />}
              percentage={54}
              up={false}
            />
            <DefaultCard
              value={`${calculateConversionRate(
                myDeskTotals.Offer,
                myDeskTotals.Hired
              )}%`}
              title="Offer : Hire"
              icon={<TrendingUp className="w-4 h-4" />}
              percentage={78}
              up={true}
            />
          </div>
          <div className="flex-1 flex flex-row items-center justify-between gap-1 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 w-auto h-full rounded-xl min-h-[19rem] p-2">
            <div className="pl-4 self-center text-left rounded-xl bg-zinc-100  dark:bg-zinc-900 w-full h-full">
              <p className="text-xl font-bold">
                Predicted Hires:{" "}
                <span className="text-2xl font-black text-indigo-700 dark:text-indigo-400 ml-2">
                  4
                </span>
              </p>
              <p className="text-xs font-light text-zinc-500 dark:text-zinc-400">
                This is a calculation that is based on may things that have been
                done in the past
              </p>
            </div>
            <div className="flex flex-col gap-1 items-end justify-end">
              <FunnelPiece
                title="Talent Pool"
                value={myDeskTotals.TalentPool}
                width={18}
              />
              <FunnelPiece
                title="Pre-Screening"
                value={myDeskTotals.PreScreening}
                width={17}
              />
              <FunnelPiece
                title="Connected"
                value={myDeskTotals.Connected}
                width={16}
              />
              <FunnelPiece
                title="Screening"
                value={myDeskTotals.Screening}
                width={15}
              />
              <FunnelPiece
                title="Submissions"
                value={myDeskTotals.Approved_Submissions}
                width={14}
              />
              <FunnelPiece
                title="IV First"
                value={myDeskTotals.ClientInterview1}
                width={13}
              />
              <FunnelPiece
                title="IV Final"
                value={myDeskTotals.ClientInterviewFinal}
                width={12}
              />
              <FunnelPiece title="Offers" value={myDeskTotals.Offer} width={11} />
              <FunnelPiece title="Hired" value={myDeskTotals.Hired} width={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
