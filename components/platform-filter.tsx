"use client"

import { useRouter, usePathname } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Code, FileCode } from "lucide-react"

export default function PlatformFilter({ activePlatform }: { activePlatform?: string }) {
    const router = useRouter()
    const pathname = usePathname()

    const handlePlatformChange = (platform: string) => {
        if (platform === "all") {
            router.push(pathname)
        } else {
            router.push(`${pathname}?platform=${platform}`)
        }
    }

    return (
        <div className="flex justify-center mb-6">
            <Tabs defaultValue={activePlatform || "all"} onValueChange={handlePlatformChange} className="w-full max-w-md">
                <TabsList className="grid grid-cols-4 w-full">
                    <TabsTrigger value="all" className="flex items-center gap-1">
                        All
                    </TabsTrigger>
                    <TabsTrigger value="codeforces" className="flex items-center gap-1">
                        <Code2 className="h-4 w-4" />
                        <span className="hidden sm:inline">Codeforces</span>
                    </TabsTrigger>
                    <TabsTrigger value="codechef" className="flex items-center gap-1">
                        <Code className="h-4 w-4" />
                        <span className="hidden sm:inline">CodeChef</span>
                    </TabsTrigger>
                    <TabsTrigger value="leetcode" className="flex items-center gap-1">
                        <FileCode className="h-4 w-4" />
                        <span className="hidden sm:inline">LeetCode</span>
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}

