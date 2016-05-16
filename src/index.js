/**
 * Created by crystal on 5/11/16.
 */
/*
//通过对象字面量创建对象
var human = {
    breathe() {
        console.log('breathing...');
    }
};
var worker = {
    __proto__: human, //设置此对象的原型为human,相当于继承human
    company: 'freelancer',
    work() {
        console.log('working...');
    }
};
human.breathe();//输出 ‘breathing...’
//调用继承来的breathe方法
worker.breathe();//输出 ‘breathing...’*/


/*
var a = 1;
var b = 2;
var html = `<div> ${a}
    <h2> ${b} </h2>
</div>`;*/

/*import React, {Component} from 'react';

Component -> React.Component;*/

/*
let res = {
    a: 1,
    b: 2
}

let {a, b} = res;
console.log(a);
console.log(b);*/


/*
// rest
function restFunc(a, ...rest) {
    console.log(a)
    console.log(rest)
}
restFunc(1);//1  []
restFunc(1, 2, 3, 4);//1  [2,3,4]

//将所有参数相加的函数
function add(...x){
    return x.reduce((m,n)=>m+n);
}
//传递任意个数的参数
console.log(add(1,2,3));//输出：6
console.log(add(1,2,3,4,5));//输出：15

//Spread 扩展操作符
var people=['zf','John','Sherlock'];

function sayHello(people1,people2,people3){
    console.log(`Hello ${people1},${people2},${people3}`);
}
//但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
sayHello(...people);//输出：Hello zf,John,Sherlock

//而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法
sayHello.apply(null,people);//输出：Hello zf,John,Sherlock*/


/*
//Proxies
//Proxy可以监听对象身上发生了什么事情，并在这些事情发生后执行一些相应的操作。一下子让我们对一个对象有了很强的追踪能力，同时在数据绑定方面也很有用处。
//定义被侦听的目标对象
var engineer = { name: 'Joe Sixpack', salary: 50 };

//定义处理程序
var interceptor = {
    set: function (receiver, property, value) {
        console.log(property, 'is changed to', value);
        receiver[property] = value;
    }
};

//创建代理以进行侦听
engineer = Proxy(engineer, interceptor);
//做一些改动来触发代理
engineer.salary = 60;//控制台输出：salary is changed to 60*/


/*
//Object.assign 用于对象的合并，ES6对object做了很多扩展，assign是最值得点评的。
//想必你很熟悉jquery提供的extend接口，那么ES6的Object.assign就是从语法层面做了这件事情，是不是很nice。
var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target); // {a:1, b:2, c:3}
*/

/*
(function(){

})(window);

//AMD
define(['a'], function(){

})

//CMD
define(function(require, module,exports){

})

//nodejs
var a = require('a');
module.exports = a;*/

