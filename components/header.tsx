"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"

export default function Header() {
    return (
        <header className="border-b">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Code className="h-6 w-6" />
                    <span className="font-bold text-xl">ContestTracker</span>
                </Link>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/">Home</Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="#">About</Link>
                    </Button>
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

