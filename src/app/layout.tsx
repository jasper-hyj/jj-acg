"use server";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

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
		>
			{/* body: with filled container */}
			<body className="w-100">
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
			</body>
		</html>
	);
}
