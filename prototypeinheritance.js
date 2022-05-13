console.log(" This is prototype inheritance  ");
const proto ={
    slogan:function(){
        return `This is the best company `;
    },
    changeName:function(newName){
        this.namae=newName;
    }
}
const abhishek =Object.create(proto);
abhishek.name="abhishek ";
abhishek.role="programmer";
abhishek.changeName=("abhishek2");
console.log(abhishek);


const harry=Object.create(proto,{
       name:{value:"harry"},
       role:{value:"programmer"},

})
console.log(harry);