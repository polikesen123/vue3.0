/*
 * @Author: your name
 * @Date: 2020-09-22 17:38:22
 * @LastEditTime: 2020-09-23 15:02:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Vue3.0/ts/1.ts
 */
var message = 'Hello World';
console.log(message);
function sayHello(persion) {
    return 'Hello,' + persion;
}
var user = 'Mary';
console.log(sayHello(user));
document.body.innerHTML = sayHello(user);
