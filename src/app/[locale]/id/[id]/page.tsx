"use server";

import { Metadata } from "next";
import { getAcgn } from "../../(repository)/acgnRepository";
import { getDictionary } from "../../dictionaries";
import { getPostList } from "../../(repository)/postRepository";

export async function generateMetadata({
	params,
}: {
	params: { locale: string };
}): Promise<Metadata> {
	return {
		title: `JJ ACG`,
	};
}

export default async function Page({
	params,
}: {
	params: { locale: string; id: string };
}) {
	const acgn = await getAcgn(params.locale, params.id);
	const postList = await getPostList(params.locale, acgn.id);
	const dict = await getDictionary(params.locale);
	return (
		<div className="container mt-3">
			<div className="row">
				<div className="col-md-6 col-sm-12">
					<h2>{acgn.name}</h2>
					<img
						src={`/static/acgn/${acgn.id}/main.jpg`}
						className="img-fluid rounded mb-3"
						alt="..."
						width={"75%"}
					/>
					<h5>{dict.post.intro}</h5>
					<p>{acgn.descr}</p>
				</div>
				<div className="col-md-6 col-sm-12 mt-3">
					<h4>{dict.post.relate}</h4>
					{postList.map((post, index) => (
						<div key={`${post.acgnId}-${post.id}`}>
							<a
								href={`/${acgn.locale}/id/${acgn.id}/post/${post.id}/`}
								className="link-underline link-underline-opacity-0"
							>
								<div className="card mt-3 zoom">
									<div className="row g-0">
										<div className="col-md-4">
											<img
												src={`/static/acgn/${post.acgnId}/post/${post.id}-main.jpg`}
												className="img-fluid rounded-start object-fit-cover h-100 w-100"
												alt={`${post.id}-main.jpg`}
											/>
										</div>
										<div className="col-md-8">
											<div className="card-body">
												<h5 className="card-title">
													{post.title}
												</h5>
												<p className="card-text">
													{post.descr}
												</p>
												<p className="card-text">
													<small className="text-body-secondary">
														{post.updateAt}
													</small>
												</p>
											</div>
										</div>
									</div>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
