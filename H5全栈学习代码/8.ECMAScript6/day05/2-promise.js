const { JSDOM } = require('jsdom');
const { window } = new JSDOM('<!DOCTYPE html>');
const $ = require('jquery')(window);

let p1 = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://134.175.154.93:8099/manager/category/findAllCategory',
        method: 'GET',
        success(res) {
            resolve(res);
        },
        error(error) {
            reject(error);
        }
    });
});

let p2 = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://134.175.154.93:8099/manager/article/findArticle?page=0&pageSize=100',
        method: 'GET',
        success(res) {
            resolve(res);
        },
        error(error) {
            reject(error);
        }
    });
});

let p3 = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://134.175.154.93:8099/manager/user/findAllUser',
        method: 'GET',
        success(res) {
            resolve(res);
        },
        error(error) {
            reject(error);
        }
    });
});

//Promise.all()
//如果p1,p2,p3都执行成功应该做什么事,其他情况下又应该做什么事

/* let p = Promise.all([p1, p2, p3]);
p.then((re) => {
    console.log(re);
}).catch((error) => {
    console.log(error);
}); */

//Promise.race()
//谁执行的快就用谁的结果
let p = Promise.race([p1, p2, p3]);
p.then((re) => {
    console.log(re);
}).catch((error) => {
    console.log(error);
});