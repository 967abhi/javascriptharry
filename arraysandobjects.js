console.log(" we are going to see about array and objects in javascript ");  
let fruits=['orange','apple','gauava'];
let marks =[34,12,13,15,16];
const mixed=['str',89,[12,13]];
const arr= new Array(23,123,21,'orange');
console.log(arr);
console.log(marks);
console.log(mixed);
console.log(arr.length);
console.log(Array.isArray(23));
arr[0]='abhishek ';
console.log(arr);
let arrelement=arr[0];
console.log('element :',arrelement);



//indexof array 

let value =marks.indexOf(16);
console.log(value);

// mutating means modifying 

// marks.push(45);
// console.log(marks);


// agr mujhe starting me add karna hoga tab kya karenge tab hum log unshift ka use karenge 
// marks.unshift(18);
// console.log(marks);

//pop 
// marks.pop();
console.log(marks);



// marks.shift();
// console.log(marks);


// marks.reverse();

console.log(marks);

// marks.splice(1,3);
console.log(marks);

let marks2=[1,2,3,4,5];

 marks=marks.concat(marks2);
console.log(marks);






//objects  
let myobj={
    name:'abhishek ',
    channel:'avs code ',
    isActive:true,
    marks:[1,5,3,6]
}
console.log(myobj);
console.log(myobj.channel);
console.log(marks);