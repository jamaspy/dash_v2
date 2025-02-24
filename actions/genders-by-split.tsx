"use server";

import { auth } from "@/auth";
import { createUrl } from "@/utils/create-url";
import { HEADERS } from "@/utils/headers";
import { Session } from "next-auth";
import { redirect } from "next/navigation";


export interface GenderSplit {
  Gender: string;
  CountPerGender: number;
}

export const getGendersBySplit = async (
  type: "split" | "placements"
): Promise<GenderSplit[]> => {
  const session: Session | null = await auth()

  if (!session) {
    redirect("/login")
  }

  const { companyId, clientCategories } = session.user;

  const url = createUrl("genders", companyId, { clientCategories }, type)
  const response = await fetch(url, HEADERS)

  const data = await response.json();
  return data;
};
