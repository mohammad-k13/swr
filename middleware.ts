import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
      const { pathname } = req.nextUrl;

      if (pathname === "/") {
            const productsUrl = req.nextUrl.clone();
            productsUrl.pathname = "/products";
            return NextResponse.redirect(productsUrl);
      }
}
