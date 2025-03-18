import type { Contest } from "@/types/contest"
import ContestList from "@/components/contest-list"
import PlatformFilter from "@/components/platform-filter"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import Header from "@/components/header"

async function getContests(): Promise<Contest[]> {
  const res = await fetch("http://localhost:3000/api/contests");
  const data = await res.json()
  return data;
}

export default async function Home({
  searchParams,
}: {
  searchParams: { platform?: string }
}) {
  const contests = await getContests()
  const platform = (await searchParams).platform
  const filteredContests = platform ? contests.filter((contest) => contest.platform.toLowerCase() == platform) : contests

  return (
    <main className="container mx-auto px-4 py-8">
      <Header />
      <h1 className="text-3xl font-bold m-8 text-center">Upcoming Coding Contests</h1>

      <PlatformFilter activePlatform={platform} />

      <Suspense fallback={<ContestListSkeleton />}>
        <ContestList contests={filteredContests} />
      </Suspense>
    </main>
  )
}

function ContestListSkeleton() {
  return (
    <div className="space-y-4 mt-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="p-6 border rounded-lg">
          <Skeleton className="h-6 w-3/4 mb-4" />
          <Skeleton className="h-4 w-1/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  )
}

