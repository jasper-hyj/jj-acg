"use server";
"use strict";
import { PrismaClient } from "@prisma/client";
import acgnJSON from "@/resources/db/acgn.json"
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

	const acgnList: Acgn[] = acgnJSON.filter((acgn) => acgn.locale === locale && acgn.type.includes(type));
	acgnList.sort((a, b) => {
		if (a.updateAt > b.updateAt) {
			return -1;
		} else {
			return 1;
		}
	});
	if (typeof amount !== 'undefined') {
		return acgnList.sort(() => 0.5 - Math.random()).slice(0, amount);
	} else {
		return acgnList;
	}
}

export async function getAcgn(locale: string, id: string) {
	return acgnJSON.filter((acgn) => acgn.locale == locale && acgn.id.toString() == id)[0];
}

// prisma.$disconnect();
