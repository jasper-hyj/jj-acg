"use server";

import { Metadata } from "next";
import { getPostList } from "../(repository)/repository";
import Card from "../(components)/card";
import Carousel from "../(components)/carousel";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Anime - JJ ACG",
	};
}

export default async function Page({ params }: { params: { locale: string } }) {
	const animeCards = await getPostList(params.locale, "game", 5);
	const animePosts = await getPostList(params.locale, "game");
	return (
		<>
			<Carousel posts={animePosts} />
			<div className="container mt-5">
				<Card posts={animeCards} />;
			</div>
		</>
	);
}
