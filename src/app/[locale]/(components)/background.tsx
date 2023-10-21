"use server";
import fs, { readdirSync } from "fs";
import path from "path";

export default async function Background() {
	var dir = path.join(process.cwd(), `/public/static/home/`);
	const files = await readdirSync(dir, "utf8");

	return (
		<style>{`
        .bg-image {
            background-image: url("/static/home/${
				files[Math.floor(Math.random() * files.length)]
			}"
			)}");
        };
        
        `}</style>
	);
}
