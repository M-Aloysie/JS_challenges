function hasMajorityElement(arr) {
    let count = 0;
    let candidate = null;

    
    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            candidate = arr[i];
            count = 1;
        } else if (arr[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }

    return count > arr.length / 2;
}


console.log(hasMajorityElement([3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3])); 
console.log(hasMajorityElement([3, 1, 3, 4, 4])); 
