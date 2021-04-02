//Initialize the varables. 
let fs = require("fs");
let obj1 = require("./1973354_logging");
var obj = require ("readline");
var now = new Date();
debugger;
//Retrieve objects form file 1973354_logging.js file.
console.log(obj1.a);
console.log(obj1.b);  
debugger;
//Create object for standard input and output. 
let r1 = obj.createInterface({
    input:process.stdin, 
    output:process.stdout


});

//Request input from user. 
r1.question("Enter your first name: ", (fname)=>{
    r1.question("Enter your last name: ", (lname)=> {
        r1.question("Enter your age: ", (age)=> {
         //console.log("Hi " +fname + " " +lname + "You are " +age+"years old. "+ "Current Time and Date"+ now.toUTCString()); // Used to test input string. not needed 
debugger;
// Put retrieved information into an Array.   
        let emp = new Array();
        emp.push(fname);
        emp.push(lname);
        emp.push(age);
        emp.push(now.toUTCString()); // Converts date to string
        console.log(emp); //Used to see what data is being sent to Json file. 
debugger;
//Send Array contents to Json file. 
        let jsonData = JSON.stringify(emp);
        fs.writeFileSync("1973354_data.json" , jsonData, {flag: "a"}) 
        r1.close();
debugger;
//Used for tesing to see what data is in Json file. 
      /*  let data = fs.readFileSync("1973354_data.json"); 
        console.log(data.toString()); */ 

        })
    })  
})