import request from './request';

export async function getArticles(page = 1, limit = 10, categoryid = -1) {
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid,
        }
    });
}