let date = new Date();

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());


console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());


// TO CREATE OUR OWN DATE
let createdDate = new Date(2020,2,28);  //IN JS THE MONTHS START FROM 0


console.log(createdDate.toDateString());



//to define time with date
let myDeclareDateWithTime = new Date(2023,0,21,5,3)  
console.log(myDeclareDateWithTime.toLocaleTimeString()); //output-> 5:03:00 AM


// ✅ Correct Ways to Define a Date in JavaScript
// 1️⃣ Using new Date("YYYY-MM-DD") (ISO Format - Recommended)

let myDatee = new Date("2023-01-23"); 
console.log(myDatee.toDateString());  //output-> Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
//✅ This method works correctly and is easy to read.


let myAnotherDate = new Date("01-23-2025"); 
console.log(myAnotherDate.toLocaleDateString());


//we can also make the timestamp as well 

let timestamp = Date.now(); //Date.now() returns the current timestamp in milliseconds since January 1, 1970, 00:00:00 UTC (also known as the Unix Epoch Time).
console.log(timestamp); 

//timestamp is use when we make the projects like poll, or any type of project where we want to know that when the user fill out or completed that task, like how much time they are taking

//we cal also get the time stamp by using .getTime() method like

let myNewDate = new Date();
console.log(myNewDate.getTime()); //time in milisecond

//to get the time in seconds we can convert it by using math.floor method 
console.log(Math.floor(Date.now()/1000));

 let weekDay =  myNewDate.toLocaleString('default',{
    weekday: "long",
    month: "long",
}
     
)
//we can also use this method to get the specific thing, like weekday, month etc
console.log(weekDay);














