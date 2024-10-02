// src/app/api/companies/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const res = await fetch(
    `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${body.search}`
  );
  const data = await res.json();
  return NextResponse.json({
    enheter: data?._embedded?.enheter ? data?._embedded?.enheter : [],
  });
}