"use server";
"use strict";
import { PrismaClient } from "@prisma/client";
import animeList from "../../../../../db/anime.json"
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import { JsonArray } from "@prisma/client/runtime/library";
import { copyFileSync, promises as fs } from 'fs';
import { readFileSync } from 'fs';
import path from 'path';
import { getFirestore, doc, setDoc } from "firebase/firestore";

// let db: any = null;
export interface AnimePost {
	id: string
	imagePath: string
	animeName: string
	animeDescr: string
	updateAt: string
}
// const prisma = new PrismaClient();
export async function getAnimeCarousel(locale: string) {
	// GET code for Prisma client
	// const animeList = await prisma.animePost.findMany({
	// 	where: {
	// 		locale: locale,
	// 	},
	// 	orderBy: {
	// 		updatedAt: "desc",
	// 	},
	// 	take: 10,
	// });

	// Connect to Sqlite3
	// Check if the database instance has been initialized
	// if (!db) {
	// 	// If the database instance is not initialized, open the database connection
	// 	db = await open({
	// 		filename: "./jj-ghost.db", // Specify the database file path
	// 		driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
	// 	});
	// }
	// const items: AnimePost[] = await db.all(
	// 	`SELECT * FROM animePost a
	// 	where a.locale = "${locale}"
	// 	order by a.updateAt DESC`
	// );


	const animePost = animeList.filter((anime) => anime.locale === locale);
	animePost.sort((a, b) => {
		if (a.updateAt > b.updateAt) {
			return -1;
		} else {
			return 1;
		}
	});
	return animePost.slice(0, 5);
}

export async function getAnimeCard(locale: string) {
	const animePost = animeList.filter((anime) => anime.locale === locale);
	animePost.sort((a, b) => {
		if (a.updateAt > b.updateAt) {
			return -1;
		} else {
			return 1;
		}
	});
	return animePost;
}

export async function getAnimeBlog(locale: string, id: string) {
	const animePost = animeList.filter((anime) => anime.locale == locale && anime.id.toString() == id)[0];
	return animePost;
}

// prisma.$disconnect();
