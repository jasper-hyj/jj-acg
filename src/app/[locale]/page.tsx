"use server";
import { getDictionary } from "./dictionaries";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "JJ Ghost",
	};
}

export default async function Page({ params }: { params: { locale: string } }) {
	const dict = await getDictionary(params.locale);
	return (
		<main className="px-3">
			<style>{"body{ height: 100% }"}</style>
			<h1>JJ World of Anime Comic Game</h1>
			<p className="lead">Welcome to my Website</p>
			<p className="lead">
				<a
					href="/blog"
					className="btn btn-lg btn-light fw-bold border-white bg-white"
				>
					Anime Blog
				</a>
				<a
					href="/game"
					className="btn btn-lg btn-light fw-bold border-white bg-white"
				>
					Game Blog
				</a>
			</p>
		</main>
	);
}
