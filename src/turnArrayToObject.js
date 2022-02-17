const list = [
    'mammal/dogs/husky', 'mammal/dogs/shiba', 'mammal/cats/fatCat', 'insect/manyLegs/spider/venomousSpider',
    'insect/manyLegs/spider/normalSpider'
]
function turnListToObject(arr) {
    let Obj = {}
    function buildObject(str) {
        str = str.split('/');
        console.log(str)
        let current = Obj;
        for (let i=0; i<str.length;i++) {
            let val = str[i]
            if ((i == str.length - 1) && !current[val]) current[val] = true; 
            if ( !current[val] && (i < str.length -1)) current[val] = {};
            current = current[val];
        }
    }
    for (let i = 0; i<arr.length; i++) {
        buildObject(arr[i]);
    }
    return Obj;
}
const res = turnListToObject(list);
console.log(res)