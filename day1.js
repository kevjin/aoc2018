let fs = require("fs")
var content;
fs.readFile('./input.txt', "utf8",function (err, data) {
    if (err) {
        throw err;
    }
    content = data;
    console.log(solve1(content))
    console.log(solve2(content))
});

function solve1(data) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sol = content.split("\r\n").map((e) => Number.isInteger(parseInt(e)) ? parseInt(e) : 0).reduce(reducer);
    return sol
}

function solve2(data) {
    let sol = content.split("\r\n").map((e) => Number.isInteger(parseInt(e)) ? parseInt(e) : 0);
    sol = sol.slice(0,sol.length-1)
    let sum = 0;
    let freqSet = new Set();
    let ans = -1832432;
    while (ans == -1832432)
    sol.forEach(e => {
        sum +=e;
        if (ans == -1832432 && freqSet.has(sum)) {
            ans = sum;
        }
        freqSet.add(sum)
    })
    return ans
}