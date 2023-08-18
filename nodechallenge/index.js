// //challengw time
// //using synch
// // create a folder named it main
// // create a file int it named hii.txt and data into it
// // add more data into the file at the end of the existing data .
// // read the data without getting the buffrr data at first
// // now delete both the file and the folder

// //its CRUD operation
// //start-------------------------------------

// //main folder create
const fs=require('fs');
fs.mkdirSync('main');
// //cretae file in this main folder and add data into it
 fs.writeFileSync('main/bio.txt',"My name is chikki");
// //data add without override
 fs.appendFileSync('main/bio.txt','  chikki chikki chikki');
// //read data without the buffer data
 const data1=fs.readFileSync("main\bio.txt");
 console.log(data);
// //but it give buffer data so
 const data=fs.readFileSync("main/bio.txt","utf8");
 console.log(data);
 //output---My name is chikki  chikki chikki chikki

// //rename
 fs.renameSync("main/bio.txt","main/mybio.txt");

// //delete file 
 fs.unlinkSync("main/mybio.txt");

// //now delete folder
fs.rmdirSync("main");



//challenge 2----------------------------------------------
//using asynch
// create a folder named it new
// create a file int it named hii.txt and data into it
// add more data into the file at the end of the existing data .
// read the data without getting the buffrr data at first
// now delete both the file and the folder

const fs= require('fs');
fs.mkdir('new',(err)=>{
    console.log("folder created")
});
//write file
fs.writeFile("./new/bio.txt",'my name is chomu',(err)=>{
    console.log('file creaed');
});

//append
fs.appendFile("./new/bio.txt"," hello you know me",(err)=>{
    console.log("file data append");
});

//read data without buffer
fs.readFile("./new/bio.txt","utf8",(err,data)=>{
console.log(data);
});

//remame file
fs.rename("./new/bio.txt","./new/mybio.txt",(err)=>{
    console.log("name rename sucessfully");
});

//delete file
fs.unlink("./new/mybio.txt",(err)=>{
    console.log("file deleted");
});

//delete folder
fs.rmdir("./new",(err)=>{
    console.log("folder deleted");
});