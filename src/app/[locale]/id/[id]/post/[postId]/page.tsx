"use server";

import { getPost } from "@/app/[locale]/(repository)/postRepository";
import { Metadata } from "next";
import { getAcgn } from "@/app/[locale]/(repository)/acgnRepository";
import Link from "next/link";
import { readFileSync } from 'fs';
import rehypeFormat from 'rehype-format'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

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
	contentHTML =
		await unified()
			.use(remarkParse, {fragment: true})
			.use(remarkRehype, {allowDangerousHtml: true})
			.use(rehypeRaw)
			.use(rehypeFormat)
			.use(rehypeStringify)
			.process(readFileSync(`${process.cwd()}/public/static/post/${post.acgnId}-${post.locale}-${post.id}.md`, 'utf8'))
	} catch (e) {
		console.log(`Check path: ${process.cwd()}`);
		contentHTML = "";
	}
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
				alt={`${post.id}-main.jpg`}
				style={{ width: "100%" }}
			/>
			<div
				className="mt-4"
				id="post-html"
				dangerouslySetInnerHTML={{ __html: String(contentHTML) }}
			></div>
		</div>
	);
}
