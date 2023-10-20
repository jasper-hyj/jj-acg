"use client";
import { promises as fs } from "fs";

export default function Background() {
	// const files = await fs.readdir(`${process.cwd()}/public/static/anime/`);
	// console.log(files);

	return (
		<style>{`
        .bg-image {
            background-image: url("/static/anime/urban-day-view.jpg");
        };
        
        `}</style>
	);
}
