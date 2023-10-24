"use server";

import { getPost } from "@/app/[locale]/(repository)/postRepository";
import { Metadata } from "next";
import { read } from "to-vfile";
import { remark } from "remark";
import remarkHTML from "remark-html";
import { getAcgn } from "@/app/[locale]/(repository)/acgnRepository";

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
	const acgn = await getAcgn(params.locale, params.id);
	const post = await getPost(params.locale, params.id, params.postId);
	var contentHTML;
	try {
		contentHTML = await remark()
			.use(remarkHTML)
			.process(
				await read(
					`./src/resources/db/post/${post.acgnId}-${post.locale}-${post.id}.md`
				)
			);
		contentHTML = contentHTML.value;
	} catch (e) {
		contentHTML = "";
	}
	// contentHTML = await remark().use(remarkHTML).process(post.content);
	return (
		<div
			className="text-start container mx-auto px-5"
			style={{ maxWidth: "1000px" }}
		>
			<div>
				<a
					href={`/${acgn.locale}/id/${acgn.id}/`}
					className="link-underline link-underline-opacity-0"
				>
					<p className="ps-1 mt-4 mb-2 text-body-secondary">
						{`> ${acgn.name}`}
					</p>
				</a>
				<h1 className="mb-1">{`${post.title}`}</h1>
				<p className="ps-1 mb-1">
					<small>{post.updateAt}</small>
				</p>
			</div>
			<img
				src={`/static/acgn/${post.acgnId}/${post.id}-main.jpg`}
				alt=""
				style={{ width: "100%" }}
			/>
			<div
				className="mt-4"
				dangerouslySetInnerHTML={{ __html: contentHTML }}
			></div>
		</div>
	);
}
