"use server";
import { Acgn } from "./acgn";

export default async function Carousel({ acgns }: { acgns: Acgn[] }) {
	return (
		<div
			id="carousel"
			className="carousel slide carousel-fade w-100"
			data-bs-ride="carousel"
		>
			<div className="carousel-indicators">
				{acgns.map((acgn, index) => (
					<button
						key={acgn.id}
						type="button"
						data-bs-target="#carousel"
						data-bs-slide-to={index}
						className={index == 0 ? "active" : ""}
						aria-current={index == 0 ? "true" : "false"}
						aria-label={"Slide" + (index + 1)}
					></button>
				))}
			</div>
			<div className="carousel-inner" style={{ height: "600px" }}>
				{acgns.map((acgn, index) => (
					<div
						key={acgn.id}
						className={
							index == 0
								? "active carousel-item w-100 h-100"
								: "carousel-item w-100 h-100"
						}
						data-bs-interval="5000"
					>
						<a href={`/${acgn.locale}/id/${acgn.id}/`}>
							<img
								sizes="100vw"
								className="d-block object-fit-cover w-100 h-100"
								src={`/static/acgn/${acgn.id}/carousel.jpg`}
								alt=""
							/>
							<div className="carousel-caption px-1 d-md-block bg-blur">
								<h4>{acgn.name}</h4>
								<p className="d-none d-md-block">
									{acgn.descr}
								</p>
							</div>
						</a>
					</div>
				))}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carousel"
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
				data-bs-target="#carousel"
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
