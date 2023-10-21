"use server";
import fs from "fs";
import path from "path";

export default async function Background() {
	const dir = path.resolve(`./public/static/home/`);
	const files = await fs.readdirSync(dir);

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
