"use server";
import { getAnimeCarousel } from "../(repository)/animeRepository";

export default async function AnimeCarousel({ locale }: { locale: string }) {
	const animePosts = await getAnimeCarousel(locale);
	return (
		<div
			id="anime-carousel"
			className="carousel slide carousel-fade w-100"
			data-bs-ride="carousel"
		>
			<div className="carousel-indicators">
				{animePosts.map((animePost, index) => (
					<button
						key={animePost.id}
						type="button"
						data-bs-target="#anime-carousel"
						data-bs-slide-to={index}
						className={index == 0 ? "active" : ""}
						aria-current={index == 0 ? "true" : "false"}
						aria-label={"Slide" + (index + 1)}
					></button>
				))}
			</div>
			<div className="carousel-inner" style={{ height: "500px" }}>
				{animePosts.map((animePost, index) => (
					<div
						key={animePost.id}
						className={
							index == 0
								? "active carousel-item w-100 h-100"
								: "carousel-item w-100 h-100"
						}
						data-bs-interval="5000"
					>
						<a href={"/" + locale + "/anime/" + animePost.id + "/"}>
							<img
								width={0}
								height={0}
								sizes="100vw"
								className="d-block object-fit-cover w-100 h-100"
								src={animePost.imagePath!}
								alt=""
							/>
							<div className="carousel-caption d-none d-md-block">
								<h4>{animePost.animeName}</h4>
								<p>{animePost.animeDescr}</p>
							</div>
						</a>
					</div>
				))}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#anime-carousel"
				data-bs-slide="prev"
			>
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#anime-carousel"
				data-bs-slide="next"
			>
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}
