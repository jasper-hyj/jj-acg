"use server";
"use strict";

import postJSON from "@/resources/db/post.json";
import {Post} from "@/app/[locale]/(components)/post";

export async function getPostList(locale: string, acgnId?: string) {
    let postList: Post[];
    if (typeof acgnId !== 'undefined') {
        postList = postJSON.filter((post) => post.locale == locale && post.acgnId == acgnId);
    } else {
        postList = postJSON.filter((post) => post.locale == locale);
    }

    postList.sort((a, b) => {
        if (a.updateAt > b.updateAt) {
            return -1;
        } else {
            return 1;
        }
    });
    return postList.slice(0, 20);
}


export async function getPost(locale: string, acgnId: string, id: string) {
    return postJSON.filter((post) => post.locale == locale && post.acgnId == acgnId && post.id == id)[0];
}
// prisma.$disconnect();
