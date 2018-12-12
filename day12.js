let offset = "......................................................." // len = 10
let offnum = 0
let off = 49999999959;
let initial = "#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#..#" + offset + offset + offset + ".."
let patterns = new Set();
function solve1(data) {
    // data.forEach(str => {
    //     if (str[str.length-1] == "#") {
    //         let pattern = str.slice(0,str.lastIndexOf(" =>"))
    //         patterns.add(pattern)
    //     }
    // });
    // // console.log(initial)
    // for (let i = 0; i < 155; i++) {
    //     // if(i%1000==0) console.log(i)
    //     let newgen = ""
    //     for(let j = 2; j < initial.length-2; j++) {
    //         if(patterns.has(initial.slice(j-2,j+3))) {
    //             newgen +="#"
    //         } else {
    //             newgen+="."
    //         }
    //     }
    //     initial = ".." + newgen + ".."
    //     // if(initial[4] == "#" || initial[3] == "#" || initial[2] == "#" || initial[initial.length-3] == "#" || initial[initial.length-3] == "#") {
    //     //     offnum +=3
    //     //     initial = "..." + initial + "..."
    //     // }
    //     console.log(i)
    //     console.log(initial)
    // }
    return calcSum(initial)
}

function calcSum(initial) {
    let tsum = 0;
    for (let i = 0; i< initial.length; i++) {
        if(initial[i] == "#") {
            tsum += (i-offset.length-2+49999999958)
        }
    }
    return tsum
}

function solve2(data) {
    let ans = ""
    
    return ans;
}

module.exports = {
    solve1: solve1,
    solve2: solve2
}