console.log(" this tutorial is for callback function in javascript ");
// pretend that this response is coming from the server
const student =[
    {name: "abhishek", subject: "javascript"},
    {name: "rohan", subject: "machine learning"}
]


function enrollStudent(student){
    setTimeout(function(){
        students.push(student);
    }, 3000);
}
function getStudents(){
    setTimeout(function(){
        let str="";
        students.forEach(function(student) {
            str +=`<li> ${student.name}</li>`
            
        });
         document.getElementById('students').innerHTML= str;
 
        
    }, 1000);
}


let newStudent  ={name:"Sunny", subject:"Python"}
enrollStudent(newStudent);
getStudents(); 