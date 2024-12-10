//definition of the function EmployeeInfo
function EmployeeInfo(name, Salary) {
    console.log("Welcome " + name + " Your monthly Salary is " + Salary);
}
console.log("This is my first program");
var EmpName = "John";
var EmpSalary = 50000;
//calling the function
EmployeeInfo(EmpName, EmpSalary);

const EmpSkills= (skills)=> {
    console.log("Expert in "+ skills)
   }
   EmpSkills("java")

const student= require('./StudentInfo')
const person = require('./Person')
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55))
person1= new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module", person1.getPersonInfo())
console.log("Programe ended")

os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")
