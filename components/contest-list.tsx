"use client"

import type { Contest } from "@/types/contest"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

export default function ContestList({ contests }: { contests: Contest[] }) {
    const [searchTerm, setSearchTerm] = useState('');
    // Sort contests by start time (earliest first)
    const sortedContests = [...contests].sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())

    const filteredContests = sortedContests.filter(contest =>
        contest.platform.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="flex items-center justify-center">
                <Input
                    type="text"
                    className="max-w-72 pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
                    placeholder="Search contest..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {filteredContests.length === 0 ? (
                <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-muted-foreground">No contests found</h3>
                    <p className="mt-2">Try selecting a different platform or check back later.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 m-6">
                    {filteredContests.map((contest) => (
                        <ContestCard key={contest.id} contest={contest} />
                    ))}
                </div>
            )
            }
        </>
    )
}

function ContestCard({ contest }: { contest: Contest }) {
    const [timeLeft, setTimeLeft] = useState<string>("")

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date()
            const startTime = new Date(contest.startTime)
            const diff = startTime.getTime() - now.getTime()

            if (diff <= 0) {
                return "Ongoing"
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

            if (days > 0) {
                return `${days}d ${hours}h ${minutes}m`
            } else if (hours > 0) {
                return `${hours}h ${minutes}m`
            } else {
                return `${minutes}m`
            }
        }

        setTimeLeft(calculateTimeLeft())
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 60000)

        return () => clearInterval(timer)
    }, [contest.startTime])

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    const formatDuration = (minutes: number) => {
        const hours = Math.floor(minutes / 60)
        const mins = minutes % 60
        return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
    }

    const getPlatformColor = (platform: string) => {
        switch (platform) {
            case "codeforces":
                return "bg-blue-300 text-blue-800 hover:bg-blue-200"
            case "codechef":
                return "bg-red-300 text-red-800 hover:bg-red-200"
            case "leetcode":
                return "bg-yellow-300 text-yellow-800 hover:bg-yellow-200"
            default:
                return "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }
    }

    return (
        <Card>
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <div>
                        <Badge className={`mb-2 ${getPlatformColor(contest.platform.toLowerCase())}`}>
                            {contest.platform}
                        </Badge>
                        <CardTitle className="text-xl">{contest.name}</CardTitle>
                    </div>
                    <Badge variant="outline" className="text-sm font-medium">
                        {timeLeft}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        {formatDate(contest.startTime)}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        Duration: {formatDuration(contest.duration)}
                    </div>
                </div>
                <div className="mt-4">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
                        <a href={contest.url} target="_blank" rel="noopener noreferrer">
                            Visit Contest <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

