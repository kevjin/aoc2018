let fs = require("fs")
let program = require("./day11.js")

fs.readFile('./input.txt', "utf8",function (err, data) {
    if (err) {
        throw err;
    }
    let content = data.split("\r\n");
    // let tmax = 0;
    // for(let i = 0; i < 30; i++) {
    //     tmax=  Math.max(tmax, program.solve1(content,i))
    //     console.log(tmax,i)
    // }
    console.log(program.solve1(content))
});