"use server";

import Link from "next/link";
import { Acgn } from "./acgn";

export default async function Card({ acgns }: { acgns: Acgn[] }) {
	return (
		<div className="row" data-masonry='{"percentPosition": true }'>
			{acgns.map((acgn, index) => (
				<div className="col-sm-6 col-lg-4 mb-4" key={acgn.id}>
					<Link
						href={`/${acgn.locale}/id/${acgn.id}/`}
						className="link-underline link-underline-opacity-0"
					>
						<div className="card zoom">
							<img
								style={{ width: "100%", height: "auto" }}
								className="bd-placeholder-img card-img-top"
								role="img"
								src={`/static/acgn/${acgn.id}/main.jpg`}
								alt=""
							/>

							<div className="card-body">
								<h5 className="card-title">{acgn.name}</h5>
								<p className="card-text">{acgn.descr}</p>
								<p className="card-text">
									<small className="text-body-secondary">
										{acgn.updateAt}
									</small>
								</p>
							</div>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
}
