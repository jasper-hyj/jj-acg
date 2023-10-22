"use server";

import { Metadata } from "next";
import { getPost } from "../../(repository)/repository";
import { getDictionary } from "../../dictionaries";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "JJ Anime",
	};
}

async function getTypeName(locale: string, type: string) {
	const dict = await getDictionary(locale);
	switch (type) {
		case "anime":
			return dict.anime;
		case "comic":
			return dict.comic;
		case "game":
			return dict.game;
		case "novel":
			return dict.novel;
		default:
			return "";
	}
}

export default async function Page({
	params,
}: {
	params: { locale: string; id: string };
}) {
	const post = await getPost(params.locale, params.id);
	const typeName = await getTypeName(params.locale, post.type);
	return (
		<div className="container">
			<img
				src={`${post.dirPath}main.jpg`}
				className="img-fluid rounded my-3"
				alt="..."
				width={"75%"}
			/>
			<h1>{`${typeName} - ${post.name}`}</h1>
			<h5>簡介</h5>
			<p>{post.descr}</p>
			<div dangerouslySetInnerHTML={{ __html: post.content }}></div>
		</div>
	);
}
