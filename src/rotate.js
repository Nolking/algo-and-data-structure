let arrMain = [[12,2,43], [234,55,23], [35,42,1234]]
console.log(arrMain);
function rotate(arr) {
    let ret = [[],[],[]];
    let n = arr.length;
    for (let i =0; i <n; i++) {
        for (let j =0; j <n; j++) {
            ret[i][j] = arr[n-1-j][i]
        } 
    }
    // arr[2][0] -> arr[0][0]
    // arr[1][0] -> arr[0][1]
    // arr[0][0] -> arr[0][2]

    // arr[2][1] -> arr[1][0]
    // arr[1][1] -> arr[1][1]
    // arr[0][1] -> arr[1][2]

    // arr[2][2] -> arr[2][0]
    // arr[1][2] -> arr[2][1]
    // arr[0][2] -> arr[2][2]
    return ret;
} 
console.log(rotate(arrMain))