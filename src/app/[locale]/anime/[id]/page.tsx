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
			<div className="container">
				<img
					src={`${animeBlog.dirPath}main.jpg`}
					className="img-fluid rounded my-3"
					alt="..."
					width={"75%"}
				/>
				<h1>{animeBlog.animeName}</h1>
				<h5>簡介</h5>
				<p>{animeBlog.animeDescr}</p>
				<div
					dangerouslySetInnerHTML={{ __html: animeBlog.content }}
				></div>
			</div>
			<p>{params.id}</p>
		</>
	);
}
