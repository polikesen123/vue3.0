/*
 * @Author: your name
 * @Date: 2020-09-22 17:38:22
 * @LastEditTime: 2020-09-23 15:03:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Vue3.0/ts/1.ts
 */
const message: string = 'Hello World'
console.log(message)

function sayHello(persion: string): string {
    return 'Hello,' + persion;
}
let user = 'Mary';
console.log(sayHello(user));
document.body.innerHTML = sayHello(user);


