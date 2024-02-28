function reverseArrayInPlace(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        let temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;


        leftIndex++;
        rightIndex--;
    }
}

const numbers = [1, 2, 3, 4, 5];
reverseArrayInPlace(numbers);
console.log(numbers); 
