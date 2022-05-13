console.log(" events and event in object ");
document.getElementById('heading').addEventListener('click',function(){
    console.log("you have clicked the heading ");
})
 let btn=document.getElementById('btn')
 btn.addEventListener('click',func1);
 function func1(e){
     console.log("thanks ",e);
 }
 document.querySelector('.container').addEventListener('mousemove', function(){
     console.log('you fired mouse event ');
     document.body.style.backgroundcolor='red';
 })