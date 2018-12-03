let fabric = Array.apply(null, Array(10000)).map(Number.prototype.valueOf,0)
    .map(()=> Array.apply(null, Array(10000)).map(Number.prototype.valueOf,0))
function solve1(data) {
    
    data.forEach(str => {
        let x = parseInt(str.slice(str.search("@")+2,str.search(",")))
        let y = parseInt(str.slice(str.search(",")+1,str.search(":")))
        let w = parseInt(str.slice(str.search(":")+2,str.search("x")))
        let h = parseInt(str.slice(str.search("x")+1));
        fillFabric(x,y,w,h)
    })
    return countOverlap();
}

function fillFabric(x,y,w,h) {
    for (let i = 0; i< w; ++i) {
        for (let j = 0; j < h; ++j) {
            fabric[x+i][y+j] +=1;
        }
    }
}

function countOverlap() {
    let count = 0;
    fabric.forEach((row) => {
        row.forEach((e) => {if(e >=2) count++;})
    })
    return count;
}

function checkOverlap(x,y,w,h) {
    let overlaps = false;
    for (let i = 0; i< w; ++i) {
        for (let j = 0; j < h; ++j) {
            if(fabric[x+i][y+j] >=2) overlaps = true;
        }
    }
    return overlaps;
}

function solve2(data) {
    let ans = ""
    solve1(data) // to populate the fabric matrix
    data.forEach(str => {
        let id = str.slice(1, str.search("@")-1)
        let x = parseInt(str.slice(str.search("@")+2,str.search(",")))
        let y = parseInt(str.slice(str.search(",")+1,str.search(":")))
        let w = parseInt(str.slice(str.search(":")+2,str.search("x")))
        let h = parseInt(str.slice(str.search("x")+1));
        if(!checkOverlap(x,y,w,h)) ans = id;
    })
    
    return ans;
}

module.exports = {
    solve1: solve1,
    solve2: solve2
}