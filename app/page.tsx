import type { Contest } from "@/types/contest"
import ContestList from "@/components/contest-list"
import PlatformFilter from "@/components/platform-filter"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

async function getContests(): Promise<Contest[]> {
  // In a real app, you would fetch from actual APIs
  // This is a mock implementation
  await new Promise((resolve) => setTimeout(resolve, 0))

  return [
    {
      id: "1",
      name: "Codeforces Round #900 (Div. 2)",
      platform: "codeforces",
      url: "https://codeforces.com/contests/1234",
      startTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
      duration: 120, // minutes
    },
    {
      id: "2",
      name: "CodeChef Starters 100",
      platform: "codechef",
      url: "https://www.codechef.com/START100",
      startTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
      duration: 180, // minutes
    },
    {
      id: "3",
      name: "LeetCode Weekly Contest 350",
      platform: "leetcode",
      url: "https://leetcode.com/contest/weekly-contest-350",
      startTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
      duration: 90, // minutes
    },
    {
      id: "4",
      name: "LeetCode Biweekly Contest 120",
      platform: "leetcode",
      url: "https://leetcode.com/contest/biweekly-contest-120",
      startTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day from now
      duration: 90, // minutes
    },
    {
      id: "5",
      name: "Codeforces Educational Round #160",
      platform: "codeforces",
      url: "https://codeforces.com/contests/1856",
      startTime: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 days from now
      duration: 120, // minutes
    },
    {
      id: "6",
      name: "CodeChef Cook-Off",
      platform: "codechef",
      url: "https://www.codechef.com/COOK144",
      startTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days from now
      duration: 150, // minutes
    },
  ]
}

export default async function Home({
  searchParams,
}: {
  searchParams: { platform?: string }
}) {
  const contests = await getContests()
  const platform = searchParams.platform

  const filteredContests = platform ? contests.filter((contest) => contest.platform === platform) : contests

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Coding Contests</h1>

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

