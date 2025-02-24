"use server";

import { Session } from "next-auth";
import { XataClient } from "@/database/client";
import { ProfileRecord } from "@/database/xata";
import { SelectedPick } from "@xata.io/client";
import { revalidateTag } from "next/cache";
import { auth } from "@/auth";

export async function revalidateHiresData() {
    "use server";
    revalidateTag("hires-by-month");
}

export const updateClientTargetHires = async (targetHires: number): Promise<Readonly<SelectedPick<ProfileRecord, ["*"]>>> => {
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

        if (!profile) {
            throw new Error("Profile not found");
        }

        const updatedProfile = await XataClient.db.profile.update(profile.id, {
            hiresTarget: targetHires
        });

        return JSON.parse(JSON.stringify(updatedProfile));
    } catch (error) {
        console.log("Error fetching client target hires", error);
        throw new Error("Error fetching client target hires");
    }
};

