function solve1(data) {
    let twice = 0;
    let thrice = 0;
    data.forEach(str => {
        let twiceSat = false;
        let thriceSat = false;
        for (let i = 0; i<str.length; ++i) {
            let len = str.split(str.charAt(i)).length -1;
            if (!twiceSat && len == 2) {
                twice +=1;
                twiceSat = true;
            } else if (!thriceSat && len == 3) {
                thrice +=1;
                thriceSat = true;
            }
        }
    })
    return twice * thrice
}

function solve2(data) {
    let ans = "";
    data.forEach((str1,i)=> {
        data.slice(i+1,data.length).forEach(str2 => {
            if(compare(str1,str2)[0] == 1) ans = compare(str1,str2)[1]
        })
    })
    return ans;
}

function compare(str1,str2) {
    let diff = 0;
    let same = "";
    for (let i = 0; i < Math.min(str1.length,str2.length); ++i) {
        if ( str1[i]!=str2[i]) {
            diff +=1;
        } else {
            same += str1[i]
        }
    }
    diff += Math.abs(str1.length - str2.length)
    return [diff, same];
}

module.exports = {
    solve1: solve1,
    solve2: solve2
}