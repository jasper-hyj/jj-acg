"use server";
import Icon from "./icon";
import { signOut, useSession, signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { headers } from "next/headers";

export default async function Nav({
	dict,
	locale,
}: {
	dict: any;
	locale: string;
}) {
	const session = await getServerSession(authOptions);
	// const { data: session, status } = useSession();

	const headersList = headers();
	// read the custom x-url header
	const header_path = headersList.get("x-invoke-path") || "";
	console.log(header_path);
	// const pathName = headersList.get("path").slice(4);

	let auth;
	if (session !== null) {
		auth =
			session.user?.image !== null && session.user?.name !== null ? (
				<div className="nav-link py-0 dropdown dropdown-center">
					<button
						style={{
							width: "32px",
							height: "32px",
							borderRadius: "50%",
						}}
						className="btn p-0 btn-secondary"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<img
							style={{
								width: "32px",
								height: "32px",
								borderRadius: "50%",
							}}
							src={session.user?.image!}
							alt={session.user?.name}
						/>
					</button>

					<ul className="dropdown-menu">
						<li>
							<a
								className="dropdown-item"
								href={`/${locale}/user`}
							>
								My Profile
							</a>
						</li>
						<li>
							<a
								className="dropdown-item"
								href={`/${locale}/settings`}
							>
								Settings
							</a>
						</li>

						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
							<a
								href="/api/auth/signout"
								className="nav-link fw-bold py-1 text-dark"
							>
								Sign Out
							</a>
						</li>
					</ul>
				</div>
			) : (
				<></>
			);
	} else {
		auth = (
			<a
				className="nav-link fw-bold py-1 text-dark"
				href="/api/auth/signin"
			>
				Sign In
			</a>
		);
	}
	return (
		<header className="p-3 mb-auto bg-blur sticky-top">
			<div className="container">
				<a
					className="navbar-brand float-md-start mb-0 align-middle"
					href={`/${locale}/`}
				>
					<div className="d-flex align-items-center justify-content-between">
						<Icon />
						<span className="navbar-brand mb-0 h1 fs-3">
							{dict.nav.title}
						</span>
					</div>
				</a>
				<nav className="nav nav-masthead justify-content-center float-md-end">
					<a
						className="nav-link fw-bold py-1 text-dark"
						href={"/" + locale + "/anime"}
					>
						{dict.anime}
					</a>
					<a
						className="nav-link fw-bold py-1 text-dark"
						href={"/" + locale + "/comic"}
					>
						{dict.comic}
					</a>
					<a
						className="nav-link fw-bold py-1 text-dark"
						href={"/" + locale + "/game"}
					>
						{dict.game}
					</a>
					<a
						className="nav-link fw-bold py-1 text-dark"
						href={"/" + locale + "/novel"}
					>
						{dict.novel}
					</a>
					<a
						className="nav-link fw-bold py-1 text-dark"
						href={dict.nav.c_lang_link + header_path}
					>
						{dict.nav.c_lang}
					</a>
					{auth}
				</nav>
			</div>
		</header>
	);
}
