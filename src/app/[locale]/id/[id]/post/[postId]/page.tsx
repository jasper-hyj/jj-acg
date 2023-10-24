"use server";

import { getPost } from "@/app/[locale]/(repository)/postRepository";
import { Metadata } from "next";
import { read } from "to-vfile";
import { remark } from "remark";
import remarkHTML from "remark-html";

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
	var contentHTML;
	try {
		contentHTML = await remark()
			.use(remarkHTML)
			.process(
				await read(`./post/${post.acgnId}-${post.locale}-${post.id}.md`)
			);
		contentHTML = contentHTML.value;
	} catch (e) {
		contentHTML = "";
	}
	// contentHTML = await remark().use(remarkHTML).process(post.content);
	return (
		<>
			<div>
				<h1 className="my-4">{post.title}</h1>
				<img
					src={`/static/acgn/${post.acgnId}/${post.id}-main.jpg`}
					alt=""
					style={{ width: "70%" }}
				/>
				<p className="my-3">
					<small>{post.updateAt}</small>
				</p>
				<div dangerouslySetInnerHTML={{ __html: contentHTML }}></div>
			</div>
		</>
	);
}
