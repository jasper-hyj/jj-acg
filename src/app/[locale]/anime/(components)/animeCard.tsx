"use server";

import { getAnimeCard } from "../(repository)/animeRepository";
import Card from "../../(components)/card";

export default async function AnimeCard({ locale }: { locale: string }) {
	const animeCards = await getAnimeCard(locale);
	return <Card posts={animeCards} />;
}
