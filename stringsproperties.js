console.log(" properties of javascript ");



//concate


let html;
html="<h1> This is heading </h1>"+"<p> this is para </p>";
console.log(html);
// console.log(html.length);
// console.log(html.toLocaleLowerCase());
// console.log(html.toUpperCase());


//index in print in javascript 
// console.log(html[0]);



// 2indexoff
console.log(html.indexOf('This'));


//3lastindexof
console.log(html.lastIndexOf('<'));


// 4charAt
console.log(html.charAt(0));


//5endwith
console.log(html.endsWith('</p>'));

//6includes
console.log(html.includes('this'));
//7substrings
console.log(html.substring(1,10));
// 8slice
console.log(html.slice(0,15));

// 9split
console.log(html.split(''));
// 10replace
console.log(html.replace('this','it'));



// templateandliterals
let fruit1='orange';
let fruit2='apple';
let myHtml=`hello ${name}
<h1> this is heading</h1>
<p> you like ${fruit1}and ${fruit2}

`;
document.body.innerHTML =myHtml