"use server";

import { Metadata } from "next";
import { getAnimeBlog, getAnimeContent } from "../(repository)/animeRepository";

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
	const content = await getAnimeContent(params.locale, animeBlog.dirPath);
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
				{/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
			</div>
			<p>{params.id}</p>
		</>
	);
}
