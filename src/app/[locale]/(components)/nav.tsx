"use client";
import Icon from "./icon";
import { usePathname } from "next/navigation";
import { signOut, useSession, signIn } from "next-auth/react";

export default function Nav({ dict, locale }: { dict: any; locale: string }) {
	const { data: session, status } = useSession();
	const pathName = usePathname().slice(4);

	let auth, user;
	if (status === "authenticated") {
		auth = (
			<a
				role="button"
				className="nav-link fw-bold py-1 text-dark"
				onClick={() => signOut()}
			>
				Signout
			</a>
		);
		user =
			session.user?.image !== null && session.user?.name !== null ? (
				<img
					style={{
						width: "32px",
						height: "32px",
						borderRadius: "50%",
					}}
					src={session.user?.image!}
					alt={session.user?.name}
				/>
			) : (
				<></>
			);
	} else {
		auth = (
			<a
				role="button"
				className="nav-link fw-bold py-1 text-dark"
				onClick={() => signIn("google")}
			>
				Signin
			</a>
		);
	}
	return (
		<header className="p-3 mb-auto bg-blur sticky-top">
			<div className="container">
				<a
					className="navbar-brand float-md-start mb-0 align-middle"
					href="/"
				>
					<div
						className="d-flex align-items-center justify-content-between
							"
					>
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
						href={dict.nav.c_lang_link + pathName}
					>
						{dict.nav.c_lang}
					</a>
					{auth}
					{user}
				</nav>
			</div>
		</header>
	);
}
