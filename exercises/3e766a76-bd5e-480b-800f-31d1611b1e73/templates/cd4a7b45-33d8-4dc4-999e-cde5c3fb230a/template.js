/********************************************************
 *              DO NOT TOUCH AREA: START                *
 ********************************************************/

function main() {
    const arr = [];
    do {
        const n = parseInt(readln(), 10);
        if (n >= 0) {
            arr.push(n);
        }
    } while(n >= 0);
    const [min, max] = minMax(arr);
    println(min);
    println(max);
}

/********************************************************
 *                DO NOT TOUCH AREA: END                *
 ********************************************************/

