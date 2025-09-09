//Array Reverse
// [Naive Approach] Using a temporary array - O(n) Time and O(n) Space
function reverseArray(array){
    let n = array.length;

    let temp = new Array(n);

    for(let i = 0; i < n; i ++){
        temp[i]= array[n-i-1]
    }
    for(let i = 0; i < n; i ++){
        array[i]= temp[i]
    }
}

const array = [1,2,4,5,3,6];
reverseArray(array);
console.log(array.join(" "));

//[Expected Approach - 1] Using Two Pointers - O(n) Time and O(1) Space

function arrayReverse(arr){
    let left = 0, right = arr.length - 1;

    while(left < right){

        [arr[left],arr[right]] = [arr[right], arr[left]];

        left++
        right--

    }
}

const arr=[5,6,7,8,9];
arrayReverse(arr);
console.log(arr.join(" "))


// [Expected Approach - 2] By Swapping Elements - O(n) Time and O(1) Space

function ArrayReverse(arry){
    let n = arry.length;

    for(let i = 0; i < n/2; i ++){

        let temp = arry[i];

        arry[i] = arry[n - i - 1];
        arry[n - i - 1] = temp;
    }
}

const arry = [2,4,6,8,10];
ArrayReverse(arry);
console.log(arry.join(" "))

//Using Inbuilt Methods - O(n) Time and O(1) Space

function ReverseArray(arr1){
    arr1.reverse();
}

const arr1 = [1,3,5,7,9,11];
ReverseArray(arr1);
console.log(arr1.join(" "));


//Rotate an Array by d - Counterclockwise or Left

//[Naive Approach] Rotate one by one - O(n * d) Time and O(1) Space

function rotateArray(arr3, d){
    let n = arr3.length;

    for(let i = 0; i < d; i++){
        let first = arr3[0]

        for(let j = 0; j < n - 1; j++){
            arr3[j] = arr3[j +1]
        }

        arr3[n - 1]= first
    }
}

let arr3 = [1,2,3,4,5,6];
let d = 2;
rotateArray(arr3, d);
console.log(arr3.join(" "))

// [Better Approach] Using Temporary Array - O(n) Time and O(n) Space

// function RotateArray (arr4, b){
//     let n = arr4.length;
    

//     b%=n;

//     let temp = new Array(n);

//     for(let i = 0; i < n - b; i++){
//         temp[i] = arr4[n - b + i];
//     }

//     for(let i = 0; i < b ; i++){
//          temp[b + i] = arr4[i];
//     }

//     for(let i = 0; i < n ; i++){
//         arr4[i] = temp[i];
//     }

// }

// const arr4 = [1,2,3,4,5,6,7,8,9];
// const b = 3;

// RotateArray(arr4, b);

// console.log(arr4.join(" "))

function RotateArray(arr4, b) {
    let n = arr4.length;
    b %= n; // Handle b > n

    let temp = new Array(n);

    // Copy the last 'b' elements to the front
    for (let i = 0; i < b; i++) {
        temp[i] = arr4[n - b + i];
    }

    // Copy the first 'n - b' elements to the remaining positions
    for (let i = 0; i < n - b; i++) {
        temp[b + i] = arr4[i];
    }

    // Copy back to original array
    for (let i = 0; i < n; i++) {
        arr4[i] = temp[i];
    }
}

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = 3;

RotateArray(arr4, b);

console.log(arr4.join(" ")); // Output: 7 8 9 1 2 3 4 5 6


//[Expected Approach 2] Using Reversal Algorithm - O(n) Time and O(1) Space

function ArrayRotate (arr5 , f){
    let n = arr5.length;

    f %= n;

    reverse(arr5, 0, f - 1);

    reverse(arr5, f, n - 1);

    reverse(arr5, 0 , n - 1);


}

function reverse(arr5, start, end){
    while(start < end){
        let temp = arr5[start];

        arr5[start] = arr5[end];
        arr5[end] = temp;
        start++;
        end--;

    }
}
const arr5 = [1,2,3,4,5,6];
const f = 2;

ArrayRotate(arr5,f);
console.log(arr5.join(" "));