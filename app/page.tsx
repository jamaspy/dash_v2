import { Suspense } from "react";

import { ModeToggle } from "@/components/dark-mode/dark-mode-trigger";
import { MyDeskTotalsSection, GenderDataSection } from "@/components/complex";

export default async function Home() {
  return (
    <div className='min-h-screen p-4 bg-stone-300 dark:bg-stone-950 flex flex-col gap-4'>
      <ModeToggle />
      <div className="container mx-auto flex flex-row gap-2 h-full w-full bg-stone-200 dark:bg-stone-900 rounded-xl p-4">
        <Suspense fallback={<div className="flex items-center justify-center h-full w-full min-h-80">Fetching Data...</div>}>
          <MyDeskTotalsSection />
        </Suspense>
      </div>
      <div className="container mx-auto flex flex-row gap-2 h-full w-full bg-stone-200 dark:bg-stone-900 rounded-xl p-4">
        <Suspense fallback={<div className="flex items-center justify-center h-full w-full min-h-80">Fetching Data...</div>}>
          <GenderDataSection />
        </Suspense>
      </div>
    </div >
  );
}
