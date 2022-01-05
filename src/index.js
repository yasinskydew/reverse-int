module.exports = function reverse (n) {
    const array = String(n).split('').reverse();
    if(array[array.length - 1] === '-'){
        array.pop()
    }
    return Number(array.join(''))
}
