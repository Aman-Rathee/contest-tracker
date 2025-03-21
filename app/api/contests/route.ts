import { NextResponse } from "next/server";
import axios from "axios";
import dayjs from "dayjs";

interface CodeforcesContest {
    id: number;
    name: string;
    phase: string;
    startTimeSeconds: number;
    durationSeconds: number;
}

interface CodeChefContest {
    contest_code: string;
    contest_name: string;
    contest_start_date: string;
    contest_end_date: string;
}

interface LeetCodeContest {
    title: string;
    startTime: number;
    duration: number;
    titleSlug: string;
}

interface Contest {
    id: string | number;
    name: string;
    platform: string;
    startTime: string;
    duration: number;
    url: string;
}

export async function GET() {
    try {
        // Fetch contests from Codeforces
        const cfRes = await axios.get("https://codeforces.com/api/contest.list");
        const cfContests: Contest[] = cfRes.data.result
            .filter((c: { phase: string }) => c.phase === "BEFORE")
            .map((contest: CodeforcesContest) => ({
                id: contest.id,
                name: contest.name,
                platform: "Codeforces",
                startTime: dayjs.unix(contest.startTimeSeconds).toISOString(),
                duration: contest.durationSeconds,
                url: `https://codeforces.com/contest/${contest.id}`,
            }));

        // Fetch contests from CodeChef
        const chRes = await axios.get("https://www.codechef.com/api/list/contests/all?sort_by=START&sorting_order=asc&offset=0&mode=all");
        const chContests = chRes.data.future_contests.map((contest: CodeChefContest) => {
            const startTime = dayjs(contest.contest_start_date, "DD MMM YYYY HH:mm:ss");
            const endTime = dayjs(contest.contest_end_date, "DD MMM YYYY HH:mm:ss");
            const contestDuration = endTime.diff(startTime, "minutes");
            return {
                id: contest.contest_code,
                name: contest.contest_name,
                platform: "CodeChef",
                startTime: contest.contest_start_date,
                duration: contestDuration,
                url: `https://www.codechef.com/${contest.contest_code}`,
            }
        });

        // Fetch contests from Codeforces
        const graphqlQuery = {
            query: `
              query getContestList {
                allContests {
                  title
                  startTime
                  duration
                  titleSlug
                }
              }
            `
        };

        const lcRes = await axios.post("https://leetcode.com/graphql", graphqlQuery);
        const contests = lcRes.data.data.allContests;
        const now = Date.now();

        const lcContests = contests.filter((contest: { startTime: number; }) => contest.startTime * 1000 > now).map((contest: LeetCodeContest) => {
            return {
                id: contest.titleSlug,
                name: contest.title,
                platform: "LeetCode",
                startTime: contest.startTime,
                duration: contest.duration,
                url: `https://leetcode.com/contest/${contest.titleSlug}`,
            }
        })
        const finalRes = [...cfContests, ...chContests, ...lcContests]
        return NextResponse.json(finalRes);
    } catch (error) {
        return NextResponse.json({ err: "Failed to fetch contests", error }, { status: 500 });
    }
}