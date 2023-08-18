const { isUtf8 } = require("buffer");
const fs= require("fs");
fs.writeFile("read.txt","today is awesome day:)",
(err) =>{
    console.log("file created")
} );
//call back function use in async


//asynchronus
// we pass them a function as an argument -a callback -
//that gets called when that task complemtes.
//the  callback has an argument that tells your whether 
//the operation completed successfully
// now we need to say what to do when fs.writeFile has 
//completed (even if it's nothing), and start checking
// for errors.

//append in asynchronous
// fs.appendFile('read.txt',"helo i'm",
// (er) => {
//     console.log("task completed");
// });

//read dataa
// fs.readFile("read.txt","utf8",
// (err,data)=>{
//     console.log(data);
// });

//synchronus and asynchronus
//1.
//const fs= require("fs");
const data=fs.readFileSync("read.txt","Utf8");
console.log(data);//first its execute
console.log("after the data");// then
//2.





