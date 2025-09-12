const os = require("os")

console.log("OS Platform=>",os.platform()) //win32
console.log("OS Arch=> ",os.arch())  // x64
console.log("'OS Type=> ",os.type()) //Windows_NT
console.log("'RAM Total Memory (bytes):",Math.round(os.totalmem()/ 1024 **3),"GB" )
console.log('RAM Free Memory (bytes):', Math.round(os.freemem()/ 1024 ** 3),"GB"); 
console.log('Uptime (seconds):', os.uptime() / 60 );

console.log("HOme dir=>",os.homedir()) //C:\Users\admin
console.log('Temporary Directory:', os.tmpdir()); //C:\Users\admin\AppData\Local\Temp

const cp = os.cpus(); 
// console.log(cp)
console.log("core",cp.length)
console.log("core mode",cp[0])
console.log("core mode",cp[0].model)