"use server";

import { Metadata } from "next";
import { getPost } from "../../(repository)/repository";
import { getDictionary, getTypeName } from "../../dictionaries";

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
	params: { locale: string; id: string };
}) {
	const post = await getPost(params.locale, params.id);
	const typeName = await getTypeName(params.locale, post.type);
	return (
		<div className="container">
			<img
				src={`/static/acgn/${post.dirPath}/main.jpg`}
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
