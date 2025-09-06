import { NextRequest, NextResponse } from "next/server";
import { mockExperiences } from "@/data/mockExperiences";
import { Experience } from "@/types/experience";

function matchesQuery(s: string, q: string) {
  return s.toLowerCase().includes(q.toLowerCase());
}

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category");
  const limit = Number(searchParams.get("limit") ?? "0");

  let filteredExperiences: Experience[] = mockExperiences;

  if (q) {
    filteredExperiences = filteredExperiences.filter(
        (e) =>
        matchesQuery(e.title, q) ||
        matchesQuery(e.location, q) ||
        matchesQuery(e.description, q)
    );
  }

  if (category) {
    filteredExperiences = mockExperiences.filter(
      (exp) => exp.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  const limited = limit > 0 ? filteredExperiences.slice(0, limit) : filteredExperiences;

  return NextResponse.json(
    { count: filteredExperiences.length, experiences: limited },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
);
}
