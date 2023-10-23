"use server";

import { getPost } from "@/app/[locale]/(repository)/postRepository";
import { getTypeName } from "@/app/[locale]/dictionaries";
import { Metadata } from "next";

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
	params: { locale: string; id: string; postId: string };
}) {
	const post = await getPost(params.locale, params.id, params.postId);
	return (
		<>
			<div>
				<h1>{post.title}</h1>
				<img
					src={`/static/acgn/${post.acgnId}/post/${post.id}-main.jpg`}
					alt=""
					style={{ width: "70%" }}
				/>
				<p>
					<small>{post.updateAt}</small>
				</p>
				<p>{post.content}</p>
			</div>
		</>
	);
}
