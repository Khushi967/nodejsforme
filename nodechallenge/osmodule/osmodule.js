//check operating system archtecture
const os= require("os");
console.log(os.arch());
console.log(os.platform.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());


//check memory which is free
const freeMemory=os.freemem();
//console.log(freememory);
//change bytes to gigabytes
console.log(`${freeMemory/1024/1024/1024}`);



//check total memory
const totalMemory=os.totalmem();
//console.log(freememory);
//change bytes to gigabytes
console.log(`${totalMemory/1024/1024/1024}`);
