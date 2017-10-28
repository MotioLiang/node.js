// 函数实现累加
/*
   reduce(per,curr):接受一个函数作为累加器，数组中的每一个值(从左到右)开始缩减，
   最终为一个值,per:执行数组中的每一个值，curr:可选参数作为第一次调用per的第一个参数
   
*/
let num = function (...per) {
     return per.reduce((prev,curr) => {
           return prev + curr;
     });
};
console.log(num(1,8,9,7));
// ----------------------------------------------------
// ES5 继承
function Plane() {
	this.wings = 2;
	this.speeds = 56;
	this.alttude = 89;
}

const myPlane = new Plane();
Plane.prototype.add = function () {
	 this.alttude = 100;
}
myPlane.add();
console.log(myPlane.alttude);

function Fig() {
	this.from = "China";
}
Fig.prototype = new Plane();
const myFig = new Fig();
myFig.add();
console.log(myFig.alttude);

// ES6 继承
"sue strict"

class Person{
	constructor(name,age,weigth){
		this.name = name;
		this.age = age;
		this.weigth = weigth;
	}
    print(){
    	console.log(this.age);
    }
}
const myPerson = new Person("艾琳",22,56);
myPerson.print();

class From extends Person{
    constructor(name,age,weigth,langue){
    	super(name,age,weigth);
        this.langue = langue;
    }
    dast(){
    	// console.log(this.langue);
    	console.log(this.name);
    }
}
const myFrom = new From("wint",55,98,"c++");
myFrom.dast();

// ---------------------------------------------------------------
// promise 对象用于一个异步操作的最终完成(或失败)及其结果值得表示
let myPromise = new Promise((resolve,reject) => {
      setTimeout(() => {
      	resolve("成功");
      },);
});
myPromise.then((data) => {
	console.log(data)
}).catch((error) => {
    console.log(error);
});

// --- 多个promise处理方法
let promise1 = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve("成功1");
	})
});
let promise2 = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve("成功2");
	});
});
Promise.all([promise1,promise2])
       .then((data) => {
       	  console.log(data);
       })
       .catch((error) => {
       	  console.log(error);
       });

// ------------------------------------------------
// fetch:请求JSON数据

fetch("http://jsonplaceholder.typicode.com/posts")
   .then((data) => {
       data.json().then((res) => {
       	   console.log(res);
       })
   })
   .catch((error) => {
   	   console.log(error);
   })














