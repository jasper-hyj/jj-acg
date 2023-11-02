"use server";

import { Metadata } from "next";
import { getAcgnList } from "../(repository)/acgnRepository";
import Card from "../(components)/card";
import Carousel from "../(components)/carousel";
import { redirect } from "next/navigation";
import { getTypeName } from "../../util/dictionaries";

const availableTypes = ["anime", "comic", "game", "novel"];

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
	params: { locale: string; type: string };
}) {
	if (!availableTypes.includes(params.type)) redirect(`/${params.locale}/`);
	const cards = await getAcgnList(params.locale, params.type);
	const acgns = await getAcgnList(params.locale, params.type, 5);
	return (
		<>
			<Carousel acgns={acgns} />
			<div className="container mt-5">
				<Card acgns={cards} locale={params.locale}/>
			</div>
		</>
	);
}
