"use server";

import { getPost } from "@/app/[locale]/(repository)/postRepository";
import { Metadata } from "next";
import { remark } from "remark";
import remarkHTML from "remark-html";
import { getAcgn } from "@/app/[locale]/(repository)/acgnRepository";
import Link from "next/link";
import { promises as fs } from 'fs';

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
		// @ts-ignore
		contentHTML = await remark()
			.use(remarkHTML)
			.process(
				await fs.readFile(`${process.cwd()}/static/post/${post.acgnId}-${post.locale}-${post.id}.md`)
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
				<Link
					href={`/${acgn.locale}/id/${acgn.id}/`}
					className="link-underline link-underline-opacity-0"
				>
					<p className="ps-1 mt-4 mb-2 text-body-secondary">
						{`> ${acgn.name}`}
					</p>
				</Link>
				<h1 className="mb-1">{`${post.title}`}</h1>
				<p className="ps-1 mb-1">
					<small>{post.updateAt}</small>
				</p>
			</div>
			<img
				src={`${post.image}`}
				alt=""
				style={{ width: "100%" }}
			/>
			<div
				className="mt-4"
				id="post-html"
				dangerouslySetInnerHTML={{ __html: contentHTML }}
			></div>
		</div>
	);
}
