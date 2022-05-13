console.log(" this is tutorial for object prototype")
let obj={
    name:'harry',
    channel:'Avscode',
    adderess:'mars'
}
function Obj(givenName){

    this.name=givenName;

}
Obj.prototype.getName=function(){
    return this.name;
}
Obj.prototype.SetName=function(newName){
     this.name=newName;
}
let obj2=new Obj(" Rohan Das");

console.log(obj2);