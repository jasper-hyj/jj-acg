"use server";
"use strict";

import postJSON from "../../../../db/post.json";

export async function getPostList(locale: string, acgnId: string) {
    const postList: Post[] = postJSON.filter((post) => post.locale == locale && post.acgnId == acgnId)

    postList.sort((a, b) => {
        if (a.updateAt > b.updateAt) {
            return -1;
        } else {
            return 1;
        }
    });
    return postList;
}
// prisma.$disconnect();
