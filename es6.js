console.log("welcome to the es6 classes in javascript "); 
class Employee{
    constructor(givenName,givenExperience,givenDivision ){
        this.name=givenName;
        this.experience=givenExperience;
        this.division=givenDivision;
    }
  slogan(){
      return `I am ${this.name} and this company is the best `
  }
  joiningyear(){
      return 200-this.experience;
  }

}
harry=new Employee("harry",56,"division");
console.log(harry.joiningyear)