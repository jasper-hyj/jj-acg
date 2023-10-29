"use server";
"use strict";
import acgnJSON from "@/resources/db/acgn.json"
import {Acgn} from "../(components)/acgn";

// let db: any = null;
// const prisma = new PrismaClient();
export async function getAcgnList(locale: string, type?: string, amount?: number) {
    let acgnList: Acgn[]
    if (typeof type !== "undefined") {
        // @ts-ignore
        acgnList = acgnJSON.filter((acgn) => acgn.locale === locale && acgn.type.includes(type));
    } else {
        // @ts-ignore
        acgnList = acgnJSON.filter((acgn) => acgn.locale === locale);
    }
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
