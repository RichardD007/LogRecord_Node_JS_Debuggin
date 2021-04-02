let fs = require("fs");
var emp1 = '{"id": 100, "name": "Rich", "salary": 12232300}';
var emp2 = '{"id": 101, "name": "Chris", "salary": 12000}';
var emp3 = '{"id": 102, "name": "Dan", "salary": 12000}';
var emp4 = '{"id": 103, "name": "Allie", "salary": 12000},';

let emp = new Array();
emp.push(emp1);
emp.push(emp2);
emp.push(emp3);
emp.push(emp4);

let jsonData = JSON.stringify(emp);
fs.writeFileSync("1973354_data.json" , jsonData, {flag: "a"}) 

console.log ('file written');
let data = fs.readFileSync("1973354_data.json");
console.log(data.toString())
let jsonString =data.toString();
let anotherJSON = JSON.parse(jsonString);
console.log(anotherJSON[0].id);
fs.close();


//, {flag: "a"}, (err)=> {
   // if (!err){
    //    console.log("Record Stored successfully. ");//
   // }
//})

//let obj = require("./1973354_logging");

//console.log(obj.a);
//console.log(obj.b);
//var empJson = JSON.parse(empObj);
//console.log("ID is " +empJson.id  +"Name " +empJson.name + "Salary" + empJson.salary );
