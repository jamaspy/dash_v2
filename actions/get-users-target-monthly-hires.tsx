"use server";



import { Session } from "next-auth";
import { auth } from "@/auth"
import { XataClient } from "@/database/client";
import { ProfileRecord } from "@/database/xata";
import { SelectedPick } from "@xata.io/client";



export const getClientTargetHires = async (): Promise<Readonly<SelectedPick<ProfileRecord, ["*"]>>> => {
    const session: Session | null = await auth()

    if (!session) {
        throw new Error(`Session Required`);
    }

    const { id: userId } = session.user;

    try {
        const profile = await XataClient.db.profile.filter({
            user: {
                id: userId
            }
        }).getFirst();

        return JSON.parse(JSON.stringify(profile));
    } catch (error) {
        console.log("Error fetching client target hires", error);
        throw new Error("Error fetching client target hires");
    }
};
