"use server";
import { Acgn } from "./acgn";

export default async function Card({ acgns }: { acgns: Acgn[] }) {
	return (
		<div className="row" data-masonry='{"percentPosition": true }'>
			{acgns.map((acgn, index) => (
				<>
					{/* {index % 5 != 0 ? (
						<div
							className="col-sm-12 col-md-4 col-lg-4 mb-4 px-4"
							key={acgn.id}
						>
							<a
								href={`/${acgn.locale}/id/${acgn.id}/`}
								className="link-underline link-underline-opacity-0"
							>
								<div className="card zoom">
									<img
										style={{
											width: "100%",
											height: "auto",
										}}
										className="bd-placeholder-img card-img-top"
										role="img"
										src={`/static/acgn/${acgn.id}/main.jpg`}
										alt=""
									/>

									<div className="card-body">
										<h5 className="card-title">
											{acgn.name}
										</h5>
										<p className="card-text">
											{acgn.descr}
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
					) : (
						<div
							className="col-sm-12 col-md-12 col-lg-12 mb-4 px-4"
							key={acgn.id}
						>
							<a
								href={`/${acgn.locale}/id/${acgn.id}/`}
								className="link-underline link-underline-opacity-0"
							>
								<div className="card zoom">
									<div className="row g-0">
										<div className="col-md-6">
											<img
												style={{
													height: "auto",
													width: "100%",
												}}
												className="bd-placeholder-img card-img-top"
												role="img"
												src={`/static/acgn/${acgn.id}/main.jpg`}
												alt=""
											/>
										</div>

										<div className="col-md-6">
											<div className="card-body">
												<h5 className="card-title">
													{acgn.name}
												</h5>
												<p className="card-text">
													{acgn.descr}
												</p>
												<p className="card-text">
													<small className="text-body-secondary">
														{acgn.updateAt}
													</small>
												</p>
											</div>
										</div>
									</div>
								</div>
							</a>
						</div>
					)} */}
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
										src={`/static/acgn/${acgn.id}/main.jpg`}
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
