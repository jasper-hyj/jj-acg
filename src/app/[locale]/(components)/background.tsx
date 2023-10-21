"use server";
import fs from "fs";
import path from "path";

export default async function Background() {
	const files = await fs.readdirSync(`/public/static/home/`);

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
