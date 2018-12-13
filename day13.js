String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
let firstcrash = [-1,-1]
function solve1(data) {
    let carts = []
    data.forEach((row,x) => {
        for (let y = 0; y <row.length; y++) {
            let cr = row[y];
            if(cr == ">" || cr =="<" || cr=="^" || cr=="v") {
                let cart = {
                    dir: cr,
                    x: y,
                    y: x,
                    inter: 0,
                    dead: false
                }
                carts.push(cart);
            }
        }
        // console.log(row,x)
    });
    data = data.map(row => row.replace("<","-"))
    data = data.map(row => row.replace(">","-"))
    data = data.map(row => row.replace("v","|"))
    data = data.map(row => row.replace("^","|"))
    carts.sort(compare)
    console.log(carts)
    return timestep(data,carts)
}

function compare(a,b) {
    if (a.y < b.y)
      return -1;
    if (a.y > b.y)
      return 1;
    if (a.x < b.x)
      return -1;
    if (a.x > b.x)
      return 1;
    return 0;
  }

function timestep(data,carts) {
    let crash = false
    let ans = [-1,-1]
    let dead = 0
    while(dead!=carts.length-1) {
        carts.forEach(cart => {
            if (cart.dead) {cart.x = 0; cart.y = 0}
            else {
                // console.log(cart.dir,[cart.x,cart.y])
            if (cart.dir == ">") cart.x+=1
            if(cart.dir == "<") cart.x-=1
            if(cart.dir == "^") cart.y-=1
            if(cart.dir == "v") cart.y +=1
            carts.forEach(cartO => {
                if(!cartO.dead && cartO.dir!=cart.dir && cart.x == cartO.x && cartO.y == cart.y) {
                    ans = [cart.x,cart.y]
                    console.log(cart.dir,[cart.x,cart.y])
                    cart.dead = true;
                    cartO.dead = true;
                    dead+=2;
                }
            })
            if(data[cart.y][cart.x] == "\\") {
                if(cart.dir==">" || cart.dir=="v") // down to right and right to down
                    cart.dir = (cart.dir==">") ? "v" : ">"

                if(cart.dir=="^" || cart.dir=="<") // up to left and left to up
                    cart.dir = (cart.dir=="<") ? "^" : "<"
            }
            if(data[cart.y][cart.x] == "/") {
                if(cart.dir=="<" || cart.dir=="v") // down to left and left to down
                    cart.dir = (cart.dir=="<") ? "v" : "<"

                if(cart.dir=="^" || cart.dir==">") // up to right and right to up
                    cart.dir = (cart.dir==">") ? "^" : ">"
            }
            if(data[cart.y][cart.x] == "+") {
                if(cart.inter%3 == 0) {
                    if(cart.dir == "^" || cart.dir=="v") {
                    cart.dir = (cart.dir == "^") ? "<" : ">"
                    }
                    else {
                        cart.dir = (cart.dir == ">") ? "^" : "v"
                    }
                }
                if(cart.inter%3==2) {
                    if(cart.dir == "^" || cart.dir=="v") {
                    cart.dir = (cart.dir == "^") ? ">" : "<"
                    } else {
                        cart.dir = (cart.dir == ">") ? "v" : "^"
                    }
                }
                cart.inter+=1
            }
        }
        })
        // console.log(carts)
        let testdata = data.map(row=> {
            return row.split("")
        })
        carts.forEach(acart=> {
            testdata[acart.y][acart.x] = acart.dir
        })
        // console.log(testdata.map(row=>row.join("")).join("\n"))
        carts.sort(compare)
    }
    console.log("WINNER")
    console.log(carts)
    return ans;
}

function solve2(data) {
    let ans = ""
    
    return ans;
}

module.exports = {
    solve1: solve1,
    solve2: solve2
}