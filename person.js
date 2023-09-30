class Person{
    constructor( firstname,lastname,age,qualification, country){
        
     this.firstname=firstname;
     this.lastname=lastname;
     this.age=age;
     this.qualification=qualification;
     this.country=country;
    }
    getFullname(){
        const fullname=this.firstname +" "+this.lastname;
        return fullname;
    }

}

const person1=new Person("Athiran","Dinesh",45,"MBBS","India");
const person2=new Person("Akash","Arun",22,"BCA","England");
console.log(person1);
console.log(person2);
console.log(person1.getFullname())