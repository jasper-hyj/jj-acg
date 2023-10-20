"use server";

import { getAnimeCard } from "../../(repository)/animeRepository";

export default async function AnimeCard({ locale }: { locale: string }) {
	const animeCards = await getAnimeCard(locale);
	return (
		<div
			className="row"
			id="anime-card-row"
			data-masonry='{"percentPosition": true }'
		>
			{animeCards.map((animeCard, index) => (
				<div className="col-sm-6 col-lg-4 mb-4" key={animeCard.id}>
					<a
						href={"/" + locale + "/blog/" + animeCard.id + "/"}
						className="link-underline link-underline-opacity-0"
					>
						<div className="card">
							<img
								style={{ width: "100%", height: "auto" }}
								className="bd-placeholder-img card-img-top"
								role="img"
								src={animeCard.imagePath}
								alt=""
							/>

							<div className="card-body">
								<h5 className="card-title">
									{animeCard.animeName}
								</h5>
								<p className="card-text">
									{animeCard.animeDescr}
								</p>
								<p className="card-text">
									<small className="text-body-secondary">
										{animeCard.updateAt}
									</small>
								</p>
							</div>
						</div>
					</a>
				</div>
			))}
		</div>
	);
}
