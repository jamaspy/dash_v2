'use client'

import { useFilterStore } from "@/store/provider"
import { timePeriodOptions } from "@/utils/time-period-options"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select"

export const Filters = ({ openJobsTitles }: { openJobsTitles: { label: string, value: number }[] }) => {
    const { jobTitle, setJobTitle, timePeriod, setTimePeriod } = useFilterStore(
        (state) => state,
    )
    return (
        <div className="flex items-center justify-end gap-4">
            <Select >
                <SelectTrigger className="w-[250px] border border-zinc-400 dark:border-zinc-700">
                    <SelectValue placeholder="Job Title" />
                </SelectTrigger>
                <SelectContent>
                    {openJobsTitles.map((job) => (
                        <SelectItem key={job.value} value={job.value.toString()}>
                            <p className="text-sm font-semibold line-clamp-1">{job.label}</p>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[250px] border border-zinc-400 dark:border-zinc-700">
                    <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                    {timePeriodOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value.toString()}>
                            <p className="text-sm font-semibold line-clamp-1">{option.label}</p>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}