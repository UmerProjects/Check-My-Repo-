function checkArray (array_1, array_2){
    for (let i = 0; i < array_1.length; i++) {
        if(array_2.indexOf(array_1[i]) !== -1 ){
            return true
        }
    }
    return false;
}


let res = checkArray([1, 3, 4], [4, 5, 7])

console.log(res);