console.log(" ajax in one video ");
let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler)
function buttonClickHandler(){
    console.log('you have the clicked the fetchBtn');
    // instantiate an xhr  Object
    const xhr=new XMLHttpRequest();


    //open the object 
    xhr.open('GET','abhishek.txt',true);
     

    // what to do on progress  
    xhr.onprogress=function(){
        console.log('on progress ');
    }
    //pehele hum log onreadystatechange use krte the    
    xhr.onreadystatechange = function (){
        console.log('ready state is ',xhr.readyState)
    }


    //  what to do when response is ready 
    xhr.onload = function(){
        if(this.status === 200){

            console.log(this.responseText);
        }
        else{
            console.log("some error  occured");
        }
    }
      
    // send the request
    xhr.send();


}