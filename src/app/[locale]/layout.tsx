"use server";
import "./global.css";
import { getDictionary } from "./dictionaries";
import Nav from "./(components)/nav";
import Footer from "./(components)/footer";
import React from "react";
export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const dict = await getDictionary(params.locale);
	return (
		<div className="h-100 text-center bg-image">
			<div className="d-flex w-100 h-100  mx-auto flex-column">
				<Nav dict={dict} locale={params.locale} />
				{children}
				<Footer />
			</div>
		</div>
	);
}
