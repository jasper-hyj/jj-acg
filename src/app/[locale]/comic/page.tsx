"use server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Anime - JJ ACG",
	};
}

export default async function Page({ params }: { params: { locale: string } }) {
	return (
		<>
			<div className="container mt-5"></div>
		</>
	);
}
