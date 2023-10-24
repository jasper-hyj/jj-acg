"use server";
"use strict";

import postJSON from "@/resources/db/post.json";

export async function getPostList(locale: string, acgnId: string) {
    const postList: Post[] = postJSON.filter((post) => post.locale == locale && post.acgnId == acgnId);

    postList.sort((a, b) => {
        if (a.updateAt > b.updateAt) {
            return -1;
        } else {
            return 1;
        };
    });
    return postList;
}

export async function getPost(locale: string, acgnId: string, id: string) {
    return postJSON.filter((post) => post.locale == locale && post.acgnId == acgnId && post.id == id)[0];
}
// prisma.$disconnect();
