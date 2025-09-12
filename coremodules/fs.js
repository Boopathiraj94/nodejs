 let fs =  require("fs")

//  sync
//  fs.writeFileSync("test.txt","Hi welcome to the node js")
//  console.log("file written successfully")

// fs.writeFileSync("files/test.txt","nested files written")
// console.log("file written")

// read sync
// let data =  fs.readFileSync("test.txt", {encoding:"utf-8"})

// console.log("content=>",data)

// write async

 fs.writeFile("node.txt"," node written conten",(err)=>{
    if(err) throw err;
    console.log("file written successfully")

    fs.readFile("node.txt",{encoding:"utf-8"},(err,data)=>{
         console.log("data",data)
    })
 })

 console.log("file processing")