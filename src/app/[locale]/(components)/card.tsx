"use client";
import { Acgn } from "./acgn";

export default function Card({ acgns }: { acgns: Acgn[] }) {
	return (
		<div className="row" data-masonry='{"percentPosition": true }'>
			{acgns.map((acgn) => (
				<>
					<div
						className="col-sm-12 col-md-6 col-lg-4 mb-4 px-4"
						key={acgn.id}
					>
						<a
							href={`/${acgn.locale}/id/${acgn.id}/`}
							className="link-underline link-underline-opacity-0"
						>
							<div className="card zoom">
								<div
									style={{
										width: "100%",
										height: "auto",
									}}
								>
									<img
										className="bd-placeholder-img card-img-top d-block object-fit-cover w-100 h-100"
										role="img"
										src={acgn.image}
										alt=""
									/>
								</div>

								<div className="card-body">
									<h5 className="card-title">{acgn.name}</h5>
									<p className="card-text">
										{`${acgn.descr.slice(
											0,
											acgn.descr.length / 2
										)}...`}
									</p>
									<p className="card-text">
										<small className="text-body-secondary">
											{acgn.updateAt}
										</small>
									</p>
								</div>
							</div>
						</a>
					</div>
				</>
			))}
		</div>
	);
}
