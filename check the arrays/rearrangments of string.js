function rearrangmentString (arr1, arr2) {

    let splitArr = arr1.split('').sort();
    let splitArr2 = arr2.split('').sort();

    if(splitArr == splitArr2){
        console.log("The strin has eqaul numbers")
    }

}

let res = rearrangmentString("rat", "tar")
console.log(res);