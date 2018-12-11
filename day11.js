let starmap = Array.apply(null, Array(300)).map(Number.prototype.valueOf,0)
.map(()=> Array.apply(null, Array(300)).map(Number.prototype.valueOf,0))
starmap = starmap.map((row,x)=>row.map((e,y)=> getPowerLevel(x+1,y+1)))
let size = 13;
function solve1(data) {
    let maxX = 0;
    let maxY = 0;
    let total = 0;
    starmap.slice(0,starmap.length-size).forEach((row,x) => {
        row.slice(0,row.length-size).forEach((e,y) => {
            let tt = 0;
            for(let i = 0; i< size; i++) {
                for (let j = 0; j < size; j++) {
                    tt+=starmap[x+i][y+j]
                }
            }
            // console.log(tt)
            if (tt > total) {
                // console.log(tt)
                maxX = x;
                maxY = y;
                total = tt;
            }
        })
    });
    console.log(total)
    return [maxX+1,maxY+1]
}

function getPowerLevel(x,y,serial = 8979) {
    let rackid = x + 10;
    let pl = rackid * y;
    pl +=serial
    pl*=rackid
    pl = "" + pl
    return parseInt(pl[pl.length - 3]) - 5;
}

function solve2(data) {
    let ans = ""
    
    return ans;
}

module.exports = {
    solve1: solve1,
    solve2: solve2
}