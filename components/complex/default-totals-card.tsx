import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui";
import { cn } from "@/lib/utils";

export interface DefaultCardProps {
    title: string
    value: number | string
    icon: React.ReactNode
    percentage: number
    up: boolean
}

export const DefaultCard = ({ title, value, icon, percentage, up }: DefaultCardProps) => {
    return (
        <Card className='shadow-none border-2 bg-zinc-100 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 w-auto'>
            <CardHeader className='p-4'>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="text-xs">Last 6 Months</CardDescription>
            </CardHeader>
            <CardContent className='p-0 px-4 flex flex-col items-start justify-center'>
                <p className='text-2xl font-black text-violet-700 dark:text-violet-400'>{value}</p>
            </CardContent>
            <CardFooter className='p-4'>
                <div className={cn('flex items-center gap-1 text-pink-600 bg-pink-600/10 px-2 py-1 rounded-md', {
                    'bg-lime-600/10 text-lime-500': up,
                    'bg-pink-600/10 text-pink-600': !up,
                })}>
                    {icon}
                    <p className='text-xs'>{percentage}%</p>
                </div>
            </CardFooter>
        </Card>
    )
}