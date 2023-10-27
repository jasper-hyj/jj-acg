import { match } from "@formatjs/intl-localematcher";
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from "next/server";

let headers = { "accept-language": "zh-TW,zh,en-US,en;q=0.5" };
let languages = new Negotiator({ headers }).languages();
let locales = ["zh", "en"];
let defaultLocale = "zh";

// Get the preferred locale, similar to the above or using a library
function getLocale() {
	return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {

	const requestHeaders = new Headers(request.headers);
	requestHeaders.set("x-url", request.url);

	// Check if there is any supported locale in the pathname
	const pathname = request.nextUrl.pathname;
	const pathnameHasLocale = locales.some(
		(locale) =>
			pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);
	if (
		pathnameHasLocale ||
		pathname.startsWith(`/static/`) ||
		pathname.startsWith(`/api/`)
	) {
		return NextResponse.next({
			request: {
				// Apply new request headers
				headers: requestHeaders,
			},
		});
	}

	// Redirect if there is no locale
	const locale = getLocale();
	// e.g. incoming request is /products
	// The new URL is now /en-US/products
	return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		"/((?!_next).*)",
		// Optional: only run on root (/) URL
		// '/'
	],
};
