//let and const (es6)
var a=10;
a=a+7;
console.log(a);
let b=10;
b=b*10;

console.log(b);
var a=30
console.log(a);


//Define a function
function hello(){
    console.log("Hello");
}
hello();
//Arrow Function
let hey=(name)=>{
    console.log(name);
}
hey("Sakib");
//if 1 parameter
let hey2=name2=> console.log(name2);
hey2("Kishor");


//callback function

numbers=[1,23,4,5,3,4,33,32]

numbers.forEach(function (item){
    console.log(item);
});

let squareNum =numbers.map(function (item){
    return item*item;
})
console.log(squareNum);

//Array Destructing

let fruits=["Apple","Grape","Orange"];
//Destructing
let [x,,z]=fruits;
//using template litereal
console.log(`Fruits are :${x},${z}`);

//swapping
let p,q;
p=20,q=30;

[p,q]=[q,p];

console.log(`${p} ${q}`);

//Object Destructing

let person={
    name:"Sakib",
    age:20,
    dob:new Date()
}
//use the same key
let{name: fname,age,dob}=person;
console.log(fname,age,dob);
//use function
function Display ({name: fname,age,dob}){
    console.log(fname,age,dob);
}
Display(person);

//Spread Operator . . .

let str="MYNAME";
let newStr=[...str];
console.log(newStr);

let fruit1=["Apple","Pine-Apple","Mango"];
let fruit2=["Orange","Grape"];
let newFruit="Jackfruit";

let newFruit2=[...fruit1,...fruit2,newFruit];
console.log(newFruit2);
//spread on objet (Es8)

let person2={
    name:"Rakib",
    age:15,
    dob:new Date()
}
let person3={...person2,diff:"123"};
console.log(person3);
//Spread operators with function parameters
let numbers1=[23,12,43,2];
console.log(Math.max(...numbers1));

let person4=["Sakib","Hasan"]
let test=(fname,lname)=>{
    console.log(`${fname} ${lname}`);
}
test(...person4);

//Rest Operator(gathering/collect)

fruit1=["Apple","Pine-Apple","Mango"];
let[s,...r]=fruit1;
console.log(s);
console.log(r);
//symbol

let a1 =Symbol()
let b1=Symbol()

console.log(a1==b1);

let man={
    name: "Man",
    age: 20,
    [a1]:"A",
    [b1]:"B"
}

console.log(man);
console.log(Object.getOwnPropertyNames(man));
console.log(Object.getOwnPropertySymbols(man));
console.log(Object.keys(man));
console.log(JSON.stringify(man));

for(x in man){
    console.log(x);
}
let sym1=Symbol("man");
let sym2=Symbol();
console.log(sym1);
console.log(sym1==sym2);

//Iterator & Generator

let arr=[1,2,3,4,5,6,7,8,9,10];
let it=arr[Symbol.iterator]();
console.log(it.next().value);
console.log(it.next());
console.log(it.next());

//custom iterator

function customIterator(arr){
    let i=0;
    return {next: function(){
        if(i<arr.length){
            return {value: arr[i++],done:false};
        }else{
           { done:true;
        }
    }
}
}
let members =customIterator(arr);
console.log(members.next());
}
//Generator
function* genFunction(){
    yield 1;
        yield "Rahim";
        yield 2;
        yield "Karim";

        let iter=genFunction();
        console.log(iter.next().value);
}
//promises
let prom1=new Promise((resolve, reject) =>{
   
   let a;
    setTimeout(()=>{
         a=1+1;
         if(a==2){
            resolve('Sucesss')
        }else{
            reject('Error');
        }
   },4000);
})
//.then .catch
prom1.then((messeage)=>{
    console.log("I am "+messeage);
    
}).catch((messeage)=>{ 
    console.log("I am "+messeage);

})
console.log("I am after promise");
//Async Await
fetch('https://api.chucknorris.io/jokes/random')
   .then(response => response.json())
   .then(data=> {});

async function getJokes() {

let response = await fetch('https://api.chucknorris.io/jokes/random');
let data2=await response.json();
return data2;
}
getJokes().then (jokes=>console.log(jokes.value));

//Sets

let set1=new Set();
set1.add(1);
set1.add(2);
set1.add(3);
set1.add(4);

console.log(set1);
set1.delete(4);
console.log(set1.has(3));
//iterating sets

for(x of set1.values()) {
    console.log(x); 
}

let iters=set1.entries()
console.log(iters.next());

for([x] of set1.entries()) {
    console.log(x); 
}
let iters2=[...set1.entries()];
console.log(iters2);

//Maps

let map1=new Map([['hey',10],['hello',20]]);
map1.set(1,1);
map1.set(2,2);
map1.set(3,3);
map1.set(4,4);

console.log(map1);