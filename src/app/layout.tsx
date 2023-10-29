// noinspection SpellCheckingInspection

"use server";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css"
import Script from "next/script";
import NextAuthProvider from "./nextAuthProvider";
import React from "react";

export async function generateStaticParams() {
	return [{ lang: "en" }, { lang: "zh" }];
}
export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return (
		<html
			className="h-100 w-100"
			lang={params.locale}
			data-bs-theme="light"
			data-scroll="0"
		>
			{/* body: with filled container */}
			<body className="w-100" style={{ height: "100%" }}>
				<NextAuthProvider>
					{children}

					{/* Static js */}
					<Script type="text/javascript" src="/static/js/style.js" />
					<Script
						type="text/javascript"
						src="/static/js/bootstrap.bundle.min.js"
					/>
					<Script id="image-loading-script">
						{`
					Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
						var tag = document.createElement("script");
						tag.src = "https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js";
						tag.crossOrigin = "anonymous"
						tag.integrity = "sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
						document.getElementsByTagName("body")[0].appendChild(tag);
					});`}
					</Script>
					<Script
						strategy="lazyOnload"
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
					/>
					{/* eslint-disable-next-line @next/next/inline-script-id */}
					<Script strategy="lazyOnload">
						{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
					</Script>
				</NextAuthProvider>
			</body>
		</html>
	);
}
