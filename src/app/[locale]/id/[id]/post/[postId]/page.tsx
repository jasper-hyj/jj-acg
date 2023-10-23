"use server";

import { getPost } from "@/app/[locale]/(repository)/postRepository";
import { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: { locale: string };
}): Promise<Metadata> {
	return {
		title: `JJ ACG`,
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
				<h1 className="my-4">{post.title}</h1>
				<img
					src={`/static/acgn/${post.acgnId}/post/${post.id}-main.jpg`}
					alt=""
					style={{ width: "70%" }}
				/>
				<p className="my-3">
					<small>{post.updateAt}</small>
				</p>
				<p>{post.content}</p>
			</div>
		</>
	);
}
