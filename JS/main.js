class Instructor{
    id;
    salary;
    name;
    course;
};
let inst1=new Instructor(123,3000,"Noor","Java course");
let inst2=new Instructor(300,4000,"Ahmad","Fullstack developer");
//es6 ecmascript6 supports oop classbased
//js prototype based
/* java: class based
self:oop prototyped based
js:prototype based ...>> takes the object and use instances from it */
class Doctor{
    id;
    salary;
    name;
    department;
}
//class based oop is better than oop prototype based because it simulates the reality ..تحاكي الواقع

var user={
    age:25,
    name:"Ali",
    salry:3000,
    welcome: function()
    {
        console.log("Welcome");
    }
}
console.log(user); //It will print object user

let x=function(fName,lName,age)
{
    this.fname=fName;
    this.lName=lName;
    this.age=age;
    this.welcome=function()
    {
        alert("Welcome");
    }
}//Thefunction in origin is object
x.prototype.welcomeBoys=function()
{
    console.log("Hello Boys");
} //Add property outside the object
x.prototype.friends=["Ali","Mohammed","Sami"];
let user1=new x("Noor","Jallad",21);
user1.friends.push("Samer");
let user2=new x("Ahmad","Jallad",17);
let user3 =new x("Tariq","X",30);
//The 3 above users have the same functionv welcome

console.log(user1); //instance of an object
console.log(user2);
console.log(user3); //All users share the friends array
console.log(user1.welcome());

