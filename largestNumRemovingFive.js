function solution(N) {
    let str = N.toString();
    function removeNum(string, idx) {
        string = string.split('');
        string.splice(idx, 1);
        return string.join('')
    }
    let temp = [];
    for (let i =0; i < str.length; i++) {
        if (str[i] == 5) {
            temp.push(parseInt(removeNum(str, i)))
        }
        if (!str.includes(5, i+1)) {console.log(i);console.log('this rusn'); break;}
    }
    return Math.max(...temp);
}

console.log(solution(15958))
console.log(solution(-58958))

console.log(solution(-5000))
console.log(solution(15958))
