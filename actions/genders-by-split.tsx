"use server";

export interface GenderSplit {
  Gender: string;
  CountPerGender: number;
}

export interface GenderDataSection {
  genderSplits: GenderSplit[];
}

export const getGendersBySplit = async (
  type: "split" | "placements"
): Promise<GenderDataSection> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/genders/2336423/${type}`
  );
  const data = await response.json();
  return data;
};
