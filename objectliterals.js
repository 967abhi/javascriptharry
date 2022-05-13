console.log(" welcome to object literals class ");
let car={
    name:'maruthi',
    topSpeed:89,
    run:function run(){
        console.log("car is running ");
    }
}
 function generalCar(givenName,givenSpeed ){
     this.name=givenName;
     this.topSpeed=givenSpeed;
     this.run=function(){
         console.log(`${this.name} is running`);
     }
     this.analyze=function(){
         console.log(` This  car is slower by ${200- this.topSpeed} than mercedes `);
     }
 }
 car1=new generalCar('maruti 800',80);
console.log(car);