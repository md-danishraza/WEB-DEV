import { NextResponse } from "next/server";

export function middleware(req: Request) {
  return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
  matcher: ["/about/:path*", "/tours/:path*"],
};
