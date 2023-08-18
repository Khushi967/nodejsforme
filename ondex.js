//repl
// 1: js expression
//2 : use variable
//3 : Multiline code
//4: use(_) to get the last result
//5: we can use editor mode


//--------------------
// Node.js core Module
// consider modules to be the same as js libraries. A set of functions you want to include in your application.

//node.js has a set of built in modules which you can use without any further installation.


// const name="khushi";
// console.log(name);
//FILE HANDALING----------
//file create automaticly fine handling
//file create
const fs=require("fs");
fs.writeFileSync('read.txt',"hello its khushi");
//override the data
fs.writeFileSync('read.txt',"hello its khushi what are you doing");
// append synchronus
fs.appendFileSync("read.txt","hello add me");
//how read file

const buf_data=fs.readFileSync("read.txt");
console.log(buf_data);
// Node.js includes an additional datat type called Buffer
// (not available in browser's js).
// buffer is mainly used to store binary data 
// while reading from a file or recieving packets over the network.
//output---------------------
//<Buffer 68 65 6c 6c 6f 20 69 74 73 20 6b 68 75 73 68 69 20 77 68 61 74 20 61 72 65 20 79 6f 75 20 64 6f 69 6e 67 68 65 6c 6c 6f 20 61 64 64 20 6d 65>

//convert buffer data to string form
org_data=buf_data.toString();
console.log(org_data);

//file rename
fs.renameSync('read.txt','readwrite.txt');