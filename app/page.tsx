import { Suspense } from "react";

import { ModeToggle } from "@/components/dark-mode/dark-mode-trigger";
import { MyDeskTotalsSection } from "@/components/complex";

export default async function Home() {


  return (
    <div className='min-h-screen p-4 bg-zinc-300 dark:bg-zinc-950'>
      <ModeToggle />
      <div className="flex flex-row gap-2 h-full w-full bg-zinc-200 dark:bg-zinc-900 rounded-xl p-4">
        <Suspense fallback={<div className="flex items-center justify-center h-full w-full min-h-80">Fetching Data...</div>}>
          <MyDeskTotalsSection />
        </Suspense>
      </div>
    </div >
  );
}
