let center = 100
let starmap = Array.apply(null, Array(200)).map(Number.prototype.valueOf,0)
.map(()=> Array.apply(null, Array(200)).map(Number.prototype.valueOf,0))
starmap = starmap.map(row=>row.map((e)=> "."))
let time = 10605
let starmin = 100000
let starmax = 0
function solve1(data) {
    data.forEach(str => {
        let xy = str.slice(str.indexOf("<")+1,str.indexOf(">"))
        let vel = str.slice(str.lastIndexOf("<")+1,str.lastIndexOf(">"))
        let x = parseInt(xy.split(",")[0])
        let y = parseInt(xy.split(",")[1])
        let vx = parseInt(vel.split(",")[0])
        let vy = parseInt(vel.split(",")[1])
        // console.log(Math.floor(x/1000)+center,Math.floor(y/1000)+center)
        let px = Math.round(x)+center+time*vx-140
        let py = Math.round(y)+center+time*vy-140
        console.log(px,py)
        if (px > 0 && px < starmap[0].length && py > 0 && py < starmap[0].length) starmap[px][py] = "#"
        // starmap[Math.round(x/1000)+center+time*vx][Math.round(y/1000)+center+time*vy] = "#"
    });
    console.log(starmax, starmin)
    return starmap.map((row) => row.join("")).join("\n")
}

function solve2(data) {
    let ans = ""
    
    return ans;
}

module.exports = {
    solve1: solve1,
    solve2: solve2
}