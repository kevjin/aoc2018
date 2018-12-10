let fs = require("fs")
let program = require("./day10.js")

fs.readFile('./input.txt', "utf8",function (err, data) {
    if (err) {
        throw err;
    }
    let content = data.split("\r\n");
    fs.writeFile("output.txt", program.solve1(content), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    // console.log(solve2(content))
});