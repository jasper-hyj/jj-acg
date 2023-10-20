"use server";

import { Metadata } from "next";
import { getAnimeBlog } from "../(repository)/animeRepository";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "JJ Anime",
	};
}

export default async function Page({
	params,
}: {
	params: { locale: string; id: string };
}) {
	const animeBlog = await getAnimeBlog(params.locale, params.id);
	return (
		<>
			<div>
				<img
					src={animeBlog.imagePath}
					className="img-fluid"
					alt="..."
					width={"50%"}
				/>
				<h1>{animeBlog.animeName}</h1>
				<p>{animeBlog.animeDescr}</p>
			</div>
			<p>{params.id}</p>
		</>
	);
}
