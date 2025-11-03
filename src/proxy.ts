// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/dashboard"], // rutas que quieres proteger
};

export default function proxy(req: NextRequest) {
  const user = "adasd"

  if (!user ) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}
