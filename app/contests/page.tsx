import type { Contest } from "@/types/contest"
import ContestList from "@/components/contest-list"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

async function getContests(): Promise<Contest[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const res = await fetch(`${apiUrl}/api/contests`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });
  const data = await res.json()
  return data;
}


export default async function Contests() {

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold m-8 text-center">Upcoming Coding Contests</h1>
      <Suspense fallback={<ContestListSkeleton />}>
        <ContestListFetcher />
      </Suspense>
    </main>
  )
}

async function ContestListFetcher() {
  const contests = await getContests();
  const filteredContests = contests.filter((contest) => contest.platform.toLowerCase());

  return <ContestList contests={filteredContests} />;
}


function ContestListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 m-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="p-6 pb-8 border rounded-lg">
          <div className="flex justify-between items-start">
            <Skeleton className="h-5 w-1/4 mb-2" />
            <Skeleton className="h-5 w-1/5 mb-2" />
          </div>
          <Skeleton className="h-6 mt-2 w-3/4 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-4 w-2/4 mb-2" />
          </div>
          <div className="mt-2">
            <Skeleton className="h-6 w-1/4" />
          </div>
        </div>
      ))}
    </div>
  )
}
