import { NextResponse, NextRequest } from 'next/server'

export async function middleware (req: NextRequest): Promise<NextResponse<unknown>> {
  const next = NextResponse.next()
  return next
}
