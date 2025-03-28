import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, Code, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 mx-16">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Never Miss a Coding Contest Again
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Track all your favorite programming contests from LeetCode, CodeChef, Codeforces, and more in one
                                        place. Get notifications, set reminders, and improve your competitive programming skills.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link href="/contests">
                                        <Button size="lg" className="gap-1 cursor-pointer">
                                            Contests <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                    <div className="flex items-center space-x-1">
                                        <Calendar className="h-4 w-4" />
                                        <span>Upcoming contests</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Clock className="h-4 w-4" />
                                        <span>Timely reminders</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Code className="h-4 w-4" />
                                        <span>Multiple platforms</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">All Your Favorite Platforms</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                                    ContestTracker brings together all major competitive programming platforms in one place.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                            {/* LeetCode */}
                            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Image
                                        src="/"
                                        alt="LeetCode"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-bold">LeetCode</h3>
                                <p className="text-center text-muted-foreground">
                                    Weekly contests, biweekly contests, and special events to improve your algorithmic skills.
                                </p>
                            </div>

                            {/* CodeChef */}
                            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Image
                                        src="/"
                                        alt="CodeChef"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-bold">CodeChef</h3>
                                <p className="text-center text-muted-foreground">
                                    Long challenges, cook-offs, and lunchtime contests for programmers of all skill levels.
                                </p>
                            </div>

                            {/* Codeforces */}
                            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Image
                                        src="/"
                                        alt="Codeforces"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-bold">Codeforces</h3>
                                <p className="text-center text-muted-foreground">
                                    Regular rounds, educational rounds, and special contests for competitive programmers.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                    Everything you need to excel in competitive programming
                                </h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                                    ContestTracker is designed to help you stay organized and never miss an opportunity to improve your
                                    skills.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        <p className="font-medium">Personalized contest calendar</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        <p className="font-medium">Email and browser notifications</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        <p className="font-medium">Filter contests by platform and difficulty</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        <p className="font-medium">Add to calendar with one click</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        <p className="font-medium">Track your participation history</p>
                                    </div>
                                </div>
                                <Button size="lg" className="mt-4">
                                    Explore Features
                                </Button>
                            </div>
                            {/* <div className="flex items-center justify-center">
                                <div className="relative h-[350px] w-full sm:h-[400px] lg:h-[500px]">
                                    <Image
                                        src="/placeholder.svg?height=500&width=800"
                                        alt="Contest Tracker Features"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                    Ready to level up your competitive programming?
                                </h2>
                                <p className="max-w-[600px] md:text-xl/relaxed">
                                    Join thousands of developers who use ContestTracker to stay on top of their game.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button asChild size="lg" variant="secondary" className="gap-1">
                                    <Link href="/contests">Contests</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="border-t py-6 px-14">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex gap-2 items-center text-xl font-bold">
                        <Trophy className="h-6 w-6 text-primary" />
                        <span>ContestTracker</span>
                    </div>
                    <p className="text-center text-sm text-muted-foreground md:text-left">
                        &copy; {new Date().getFullYear()} ContestTracker. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                            Terms
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                            Privacy
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                            Contact
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

