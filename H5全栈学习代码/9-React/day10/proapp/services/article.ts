/* import request from '@/utils/request';

export async function query(): Promise<any> {
    return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
    return request('/api/currentUser');
}

export async function queryNotices(): Promise<any> {
    return request('/api/notices');
} */

import axios from '@/utils/axios';

export async function getArticle(params):Promise<any> {
    return axios.get('/manager/article/findArticle',{params});
}

export async function deleteById(params): Promise<any> {
    return axios.get('/manager/article/deleteArticleById', { params });
}
