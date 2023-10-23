"use client";
import Icon from "./icon";
import { usePathname } from "next/navigation";

export default function Nav({ dict, locale }: { dict: any; locale: string }) {
	const pathName = usePathname().slice(4);
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
				</nav>
			</div>
		</header>
	);
}
