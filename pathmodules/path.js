const path = require("path")

const filepath = "raja/user/demo/javascript/kk/index.css"

console.log("File Name=>", path.basename(filepath)) //index.js
console.log("Directory Name=>",path.dirname(filepath)) //raja/user/demo/javascript/kk
console.log("Extention =>",path.extname(filepath))

console.log("dir",__dirname)  //F:\nodejs\pathmodules
console.log("file",__filename) //F:\nodejs\pathmodules\path.js
// var/reactjs\nodejs\text.txt // linux problem

console.log("Joined Path:",__dirname+"\\demo"+"\\index.css") // problem
// Escape charactors \\ 

console.log("JoinPath in all",path.join(__dirname,"demo","index.css"))
//F:\nodejs\pathmodules\demo\index.css no need to set \\