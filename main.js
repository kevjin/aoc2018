let fs = require("fs")
let program = require("./day13.js")

fs.readFile('./input.txt', "utf8",function (err, data) {
    if (err) {
        throw err;
    }
    let content = data.split("\r\n");
    console.log(program.solve1(content))
});