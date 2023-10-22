"use server";
"use strict";
import { PrismaClient } from "@prisma/client";
import postJSON from "../../../../db/post.json"
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import { JsonArray } from "@prisma/client/runtime/library";
import { copyFileSync, promises as fs } from 'fs';
import { readFileSync } from 'fs';
import path from 'path';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { Post } from "../(components)/post";

// let db: any = null;
// const prisma = new PrismaClient();
export async function getPostList(locale: string, type: string, amount?: number) {
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


	const postList: Post[] = postJSON.filter((post) => post.locale === locale && post.type === type);
	postList.sort((a, b) => {
		if (a.updateAt > b.updateAt) {
			return -1;
		} else {
			return 1;
		}
	});
	if (typeof amount !== 'undefined') {
		return postList.slice(0, amount);
	} else {
		return postList;
	}
}

export async function getPost(locale: string, id: string) {
	return postJSON.filter((post) => post.locale == locale && post.id.toString() == id)[0];
}

// prisma.$disconnect();
