const fibonacci = function(num) {
    num = Number(num)
    if (num === 0){
        return 0;
    }
    if (num <0) {
    return "OOPS"
}

const arr = [1,1]
while (arr.length < num ) {
    const next = arr[arr.length - 1] + arr[arr.length - 2]
    arr.push(next);
}

const result = arr[num - 1];
return result
};

// Do not edit below this line
module.exports = fibonacci;
