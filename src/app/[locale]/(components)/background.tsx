"use server";
import fs, { readdirSync } from "fs";
import path from "path";

export default async function Background() {
	return (
		<style>{`
        .bg-image {
            background-image: url("/static/home/urban-day-view.jpg"
			)}");
        };
        
        `}</style>
	);
}
