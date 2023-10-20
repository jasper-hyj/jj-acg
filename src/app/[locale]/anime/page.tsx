"use server";

import { Metadata } from "next";
import AnimeCarousel from "./(components)/animeCarousel";
import AnimeCard from "./(components)/animeCard";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "JJ Anime",
	};
}

export default async function Page({ params }: { params: { locale: string } }) {
	return (
		<>
			<AnimeCarousel locale={params.locale} />
			<div className="container mt-5">
				<AnimeCard locale={params.locale} />
			</div>
		</>
	);
}
