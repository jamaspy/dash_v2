import { Avatar, AvatarImage, AvatarFallback, Card } from "@/components/ui";

export const RecentHireCard = () => {
    return (
        <Card className="bg-zinc-100 dark:bg-zinc-800 w-auto p-2 flex flex-row rounded-lg shadow items-center">
            <Avatar>
                <AvatarImage src={`https://ui.shadcn.com/avatars/02.png`} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col ml-4">
                    <p className="text-xs">
                        <span className="font-medium text-indigo-600 dark:text-pink-700">
                            Consultant Name:
                        </span>{" "}
                        James Aspinall
                    </p>
                    <p className="text-xs">
                        <span className="font-medium text-indigo-600 dark:text-pink-700">
                            Job Title:
                        </span>{" "}
                        Software Engineer
                    </p>
                    <p className="text-xs">
                        <span className="font-medium text-indigo-600 dark:text-pink-700">
                            Candidate Name:
                        </span>{" "}
                        John Doe
                    </p>
                    <p className="text-xs">
                        <span className="font-medium text-indigo-600 dark:text-pink-700">
                            Date:
                        </span>{" "}
                        2024-01-01
                    </p>
                </div>
            </div>
        </Card>
    )
}