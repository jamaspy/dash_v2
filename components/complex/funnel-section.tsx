export const FunnelPiece = ({ title, value, width }: { title: string, value: number, width: number }) => {
    return (
        <div style={{ width: `${width}rem` }} className="rounded-tl-xl rounded-bl-xl px-2 py-1 bg-zinc-100 border-2 border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 flex flex-row justify-between">
            <p className="text-sm font-semibold">{title}:</p>
            <p className="text-sm text-violet-700 dark:text-violet-400">{value}</p>
        </div>
    )
}