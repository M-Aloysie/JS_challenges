function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sortAndRemovePrimes(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    
    let index = 0;
    while (index < arr.length) {
        if (isPrime(arr[index])) {
            arr.splice(index, 1);
        } else {
            index++;
        }
    }

    return arr;
}


const numbers = [10, 7, 15, 3, 20, 11, 5];
const sortedWithoutPrimes = sortAndRemovePrimes(numbers);
console.log(sortedWithoutPrimes);