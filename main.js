//promise
 function main(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("success");
        },3000)
    })
 }
main().then(function(){
    console.log("resolve");
}).catch(function(){
    console.log("reject");
})
//promise chaining
function first(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("success");
        },3000)
    })
}
function second(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("success");
        },3000)
    })
}   
function third(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("success");
        },3000)        
    })
}
    
first().then(function(){
    console.log("first");
   return second();
})
.then(function(){
    console.log("second");
   return third();
})
.then(function(){
    console.log("third");
})
.catch(function(){
    console.log("reject");
})
//async await
function async1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("success");
        },3000)
    })
}
function async2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("success");
        },3000)
    })
}   
function async3(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("success");
        },3000)        
    })
}

async function asyncFun(){
    try{
        var as1=await async1();
        var as2=await async2();
        var as3=await async3();
        console.log(as1,as2,as3);
    }
    catch(err){
        console.log("await reject");
    }
}
asyncFun();

//promise all
function four(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("success");
        },3000)
    })
}
function five(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("success");
        },3000)
    })
}   
function six(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("success");
        },3000)        
    })
}
Promise.all([four(),five(),six()])
.then(function(){
    console.log("four");
})
.then(function(){
    console.log("five");
})
.then(function(){
    console.log("six");
})
.catch(function(){
    console.log("reject");
})
//map
var m=[1,2,3,4,5];
var arr=m.map(function(val){
    return val*2;
})
console.log(arr);
//foreach
var f=[1,2,3,4,5];
var arr1=f.forEach(function(val){
    console.log(val*2);
})
//filter
var fill=[5,10,15,20,25,30,35];
var arr2=fill.filter(function(val){
    return val%2==0;
})
console.log(arr2);
//reduce
var r=[1,2,3,4,5];
var arr3=r.reduce(function(pre,current){
    return pre+current
})
console.log(arr3);
//some
var s=[1,2,3,4,5];
var arr4=s.some(function(val){
    return 3<val;
})
console.log(arr4);
//every
var e=[1,2,3,4,5];
var arr5=e.every(function(val){
    return 0<val;
})
console.log(arr5);
//find
var fine=[1,2,3,4,5];
var arr6=fine.find(function(val){
    return 2<val;
})
console.log(arr6);
//this 
console.log(this);
var obj={
    name:"js",
    getName: function(){
        console.log(this.name);
    }
}
obj.getName();
//setTimeOut
setTimeout(function(){
    console.log("settimeout");
},2000)
//setInterval
/*
setInterval(function(){
    console.log("setinterval");    
},1000)

//localstorage
var obj1={
    name:"arun",
    age:21
}
localStorage.setItem("data",JSON.stringify(obj1));

//sessionStorage
var obj2={
    name:"arun",
    age:21
}
sessionStorage.setItem("data",JSON.stringify(obj2));
*/
//shallow copy
var shall=[1,2,3,4,5,"shallow"];
shall[0]=5;
var shall1=shall;
console.log(shall);
console.log(shall1);

//deep copy
var shall2=[1,2,3,4,5,"shallow copy"];
var shall3=JSON.parse(JSON.stringify(shall2));
shall2[0]=5;
console.log(shall2);
console.log(shall3);

//let 
let a=10;
console.log(a);

//var 
console.log(b);
var b;
var b;

//const
const h=10;
//h=20 const used to value not change.the value is constant

//destructuring
var d=[10,20,30];
var [x,y,z]=d;
console.log(x);
console.log(y);
console.log(z);

//export
export var ex="hi";
export function say(){
   return ex;
}
//template literals
var t=10;
console.log(`a is ${t}`);

//default values to fun param

function fun(a=20,b=30){
    var sum=a+b;
    console.log(`sum of ${sum}`)
}
fun(10)

//arrow function
var arrow=()=>{
console.log("arrow function");
}
arrow();
//call
var obj3={
    name:"arun",
    age:21
}
function main1(a,b) {
    console.log(this,a,b);
}
main1.call(obj3,1,2)

//apply
main1.apply(obj3,[5,10]);

//bind
var bind1=main1.bind(obj3,10,20);
 console.log(bind1());

 //spred
 var spred=[10,20,30,40,50];
 var spred1=[...spred];
 spred1[0]=100;
 console.log(spred);
 console.log(spred1);

 var spred3=[20,40,60,80,100];
 var spred4=[30,60,90,120,150];
 var spred5=[...spred3,...spred4];
 console.log(spred5);

 //rest
 function main3(...a){
    console.log(a)
 };

 main3(1,3,4,5);

 //class 
 class Card{
    constructor(){
        this.name="arun";
        this.age=20;
    }
 }
 let object=new Card();
 console.log(object);