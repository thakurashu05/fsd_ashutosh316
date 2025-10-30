// for of loop example

let arr=[3,5,2,4,6,8,1,7,9,0];
for(let avl of arr){
    console.log(avl);
}


// for in loop example

let obj={name:"Ashutosh", age:20, city:"Ballia"};
for(let key in obj){
    console.log(key + ": " + obj[key]);

    console.log(`${key}: ${obj[key]}`);
}