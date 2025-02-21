import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const calculateConversionRate = (firstStage: number, lastStage: number) => {
  return ((lastStage / firstStage) * 100).toFixed(0)
}