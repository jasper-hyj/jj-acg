"use server";

import { Metadata } from "next";
import { getPostList } from "../(repository)/repository";
import Card from "../(components)/card";
import Carousel from "../(components)/carousel";
import { redirect } from "next/navigation";
import { getTypeName } from "../dictionaries";

const availableTypes = ["anime", "comic", "game", "novel"];

export async function generateMetadata({
	params,
}: {
	params: { locale: string; type: string };
}): Promise<Metadata> {
	const typeName = await getTypeName(params.locale, params.type);
	return {
		title: `${typeName} - JJ ACG`,
	};
}

export default async function Page({
	params,
}: {
	params: { locale: string; type: string };
}) {
	if (!availableTypes.includes(params.type)) redirect(`/${params.locale}/`);
	const cards = await getPostList(params.locale, params.type);
	const posts = await getPostList(params.locale, params.type, 5);
	return (
		<>
			<Carousel posts={posts} />
			<div className="container mt-5">
				<Card posts={cards} />
			</div>
		</>
	);
}
