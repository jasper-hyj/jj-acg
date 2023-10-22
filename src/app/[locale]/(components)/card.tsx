"use server";

import { Post } from "./post";

export default async function Card({ posts }: { posts: Post[] }) {
	return (
		<div className="row" data-masonry='{"percentPosition": true }'>
			{posts.map((post, index) => (
				<div className="col-sm-6 col-lg-4 mb-4" key={post.id}>
					<a
						href={`/${post.locale}/${post.type}/${post.id}/`}
						className="link-underline link-underline-opacity-0"
					>
						<div className="card zoom">
							<img
								style={{ width: "100%", height: "auto" }}
								className="bd-placeholder-img card-img-top"
								role="img"
								src={`${post.dirPath}main.jpg`}
								alt=""
							/>

							<div className="card-body">
								<h5 className="card-title">{post.name}</h5>
								<p className="card-text">{post.descr}</p>
								<p className="card-text">
									<small className="text-body-secondary">
										{post.updateAt}
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
