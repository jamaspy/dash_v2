import { DateTime } from "luxon";

export const timePeriodOptions = [
    {
        label: "Today",
        value: DateTime.now().toISO(),
    },
    {
        label: "Last 7 Days",
        value: DateTime.now().minus({ days: 7 }).toISO(),
    },
    {
        label: "Last 14 Days",
        value: DateTime.now().minus({ days: 14 }).toISO(),
    },
    {
        label: "Last 30 Days",
        value: DateTime.now().minus({ days: 30 }).toISO(),
    },
    {
        label: "Last 3 Months",
        value: DateTime.now().minus({ months: 3 }).toISO(),
    },
    {
        label: "Last 6 Months",
        value: DateTime.now().minus({ months: 6 }).toISO(),
    },
    {
        label: "Last Year",
        value: DateTime.now().minus({ years: 1 }).toISO()
    },
]

