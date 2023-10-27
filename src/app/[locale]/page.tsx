"use server";
import dynamic from "next/dynamic";
import { getDictionary } from "./dictionaries";
import type { Metadata } from "next";
import { getPostList } from "./(repository)/postRepository";
import Link from "next/link";
const Background = dynamic(() => import("./(components)/background"), {
	ssr: false,
});

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "JJ ACG",
	};
}

export default async function Page({ params }: { params: { locale: string } }) {
	const dict = await getDictionary(params.locale);
	const postList = await getPostList(params.locale);
	return (
		<main className="p-5 mx-auto bg-blur">
			<Background />
			{/* <style>{"body{ min-height: 100% }"}</style> */}
			<h1 className="text-light">{dict.home.title}</h1>
			<p className="lead text-light">{dict.home.content}</p>
			<p className="lead">
				<a
					href={`/${params.locale}/anime`}
					className="btn m-2 btn-lg btn-light fw-bold border-white bg-white bg-blur"
				>
					{dict.anime}
				</a>
				<a
					href={`/${params.locale}/comic`}
					className="btn m-2 btn-lg btn-light fw-bold border-white bg-white bg-blur"
				>
					{dict.comic}
				</a>
				<a
					href={`/${params.locale}/game`}
					className="btn m-2 btn-lg btn-light fw-bold border-white bg-white bg-blur"
				>
					{dict.game}
				</a>
				<a
					href={`/${params.locale}/novel`}
					className="btn m-2 btn-lg btn-light fw-bold border-white bg-white bg-blur"
				>
					{dict.novel}
				</a>
			</p>
			<div style={{ maxWidth: "850px" }}>
				{postList.map((post) => (
					<div key={`${post.acgnId}-${post.id}`}>
						<Link
							href={`/${params.locale}/id/${post.acgnId}/post/${post.id}/`}
							className="link-underline link-underline-opacity-0"
						>
							<div className="card mt-3 zoom">
								<div className="row g-0">
									<div className="col-md-4">
										<img
											src={`${post.image}`}
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
						</Link>
					</div>
				))}
			</div>
		</main>
	);
}
