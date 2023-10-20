"use server";
import { getDictionary } from "./dictionaries";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "JJ ACG",
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
					href={`/${params.locale}/anime`}
					className="btn btn-lg btn-light fw-bold border-white bg-white"
				>
					{dict.anime}
				</a>
				<a
					href={`/${params.locale}/comic`}
					className="btn btn-lg btn-light fw-bold border-white bg-white"
				>
					{dict.comic}
				</a>
				<a
					href={`/${params.locale}/game`}
					className="btn btn-lg btn-light fw-bold border-white bg-white"
				>
					{dict.game}
				</a>
				<a
					href={`/${params.locale}/novel`}
					className="btn btn-lg btn-light fw-bold border-white bg-white"
				>
					{dict.novel}
				</a>
			</p>
		</main>
	);
}
