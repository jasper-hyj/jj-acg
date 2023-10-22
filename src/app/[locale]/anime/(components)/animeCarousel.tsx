"use server";
import { getAnimeCarousel } from "../(repository)/animeRepository";
import Carousel from "../../(components)/carousel";

export default async function AnimeCarousel({ locale }: { locale: string }) {
	const animePosts = await getAnimeCarousel(locale);
	return <Carousel posts={animePosts} />;
}
