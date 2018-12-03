let fs = require("fs")
let program = require("./day3.js")

fs.readFile('./input.txt', "utf8",function (err, data) {
    if (err) {
        throw err;
    }
    let content = data.split("\r\n");
    console.log(program.solve2(content))
    // console.log(solve2(content))
});