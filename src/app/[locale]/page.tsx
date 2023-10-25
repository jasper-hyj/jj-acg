"use server";
import dynamic from "next/dynamic";
import { getDictionary } from "./dictionaries";
import type { Metadata } from "next";
const Background = dynamic(() => import("./(components)/background"), {
	ssr: false,
});

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "JJ ACG",
	};
}

export default async function Page({ params }: { params: { locale: string } }) {
	const dict = await getDictionary(params.locale);
	return (
		<main className="p-5 mx-auto bg-blur">
			<Background />
			<style>{"body{ height: 100% }"}</style>
			<h1 className="text-light">{dict.home.title}</h1>
			<p className="lead text-light">{dict.home.content}</p>
			<p className="lead">
				<a
					href={`/${params.locale}/anime`}
					className="btn m-2 btn-lg btn-light fw-bold border-white bg-white bg-blur"
				>
					{dict.anime}
				</a>
				<a
					href={`/${params.locale}/comic`}
					className="btn m-2 btn-lg btn-light fw-bold border-white bg-white bg-blur"
				>
					{dict.comic}
				</a>
				<a
					href={`/${params.locale}/game`}
					className="btn m-2 btn-lg btn-light fw-bold border-white bg-white bg-blur"
				>
					{dict.game}
				</a>
				<a
					href={`/${params.locale}/novel`}
					className="btn m-2 btn-lg btn-light fw-bold border-white bg-white bg-blur"
				>
					{dict.novel}
				</a>
			</p>
		</main>
	);
}
