console.log(" javascript element selectors");
let element =document.getElementById('first');
// element=element.class;
// element=element.childNodes;
// element=element.parentNode
element.style.color='green';
element.innerText="hello shyam babu";
element.innerHTML="<strong>hello raju babu</strong>"
// console.log(innerHTML);
// console.log(element);


//Query selector
let sel=document.querySelector('#first');
// sel=document.querySelector('.child')
sel=document.querySelector('h1');
sel.style.color='green';
console.log(sel);
let eleme=document.getElementsByTagName('div');
console.log(eleme);
for (let index = 0; index < eleme.length; index++) {
    const element = eleme[index];
    console.log(element);

    
}

// mrray.from(eleme).forEach(element =>{
//     console.log(element);
//     element.style.color='blue';
// })