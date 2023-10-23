"use server";
"use strict";
import { PrismaClient } from "@prisma/client";
import acgnJSON from "../../../../db/acgn.json"
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import { JsonArray } from "@prisma/client/runtime/library";
import { copyFileSync, promises as fs } from 'fs';
import { readFileSync } from 'fs';
import path from 'path';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { Acgn } from "../(components)/acgn";

// let db: any = null;
// const prisma = new PrismaClient();
export async function getAcgnList(locale: string, type: string, amount?: number) {
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


	const acgnList: Acgn[] = acgnJSON.filter((acgn) => acgn.locale === locale && acgn.type === type);
	acgnList.sort((a, b) => {
		if (a.updateAt > b.updateAt) {
			return -1;
		} else {
			return 1;
		}
	});
	if (typeof amount !== 'undefined') {
		return acgnList.slice(0, amount);
	} else {
		return acgnList;
	}
}

export async function getAcgn(locale: string, id: string) {
	return acgnJSON.filter((acgn) => acgn.locale == locale && acgn.id.toString() == id)[0];
}

// prisma.$disconnect();