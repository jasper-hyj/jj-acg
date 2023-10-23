"use server";

import { Post } from "./post";

export default async function Carousel({ posts }: { posts: Post[] }) {
	return (
		<div
			id="carousel"
			className="carousel slide carousel-fade w-100"
			data-bs-ride="carousel"
		>
			<div className="carousel-indicators">
				{posts.map((post, index) => (
					<button
						key={post.id}
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
				{posts.map((post, index) => (
					<div
						key={post.id}
						className={
							index == 0
								? "active carousel-item w-100 h-100"
								: "carousel-item w-100 h-100"
						}
						data-bs-interval="5000"
					>
						<a href={`/${post.locale}/${post.type}/${post.id}/`}>
							<img
								sizes="100vw"
								className="d-block object-fit-cover w-100 h-100"
								src={`/static/acgn/${post.dirPath}/carousel.jpg`}
								alt=""
							/>
							<div className="carousel-caption px-1 d-md-block bg-blur">
								<h4>{post.name}</h4>
								<p className="d-none d-md-block">
									{post.descr}
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