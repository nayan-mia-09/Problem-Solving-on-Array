// Linear Search Function

function LinearSearch (arr, target){

  // Loop through the entire array

    for(let i = 0; i < arr.length; i ++){
        // Check if current element matches the target
        if(arr[i] === target){

            return i;  // If match found, return the index
        }
    }

    return -1;  // If not found, return -1
}


// Sample array to search in

let arr = [5,10,15,20,25,30,35,40];

// Target value to search for
let target = 30;

// Calling the linear search function
let position = LinearSearch(arr, target);

// Output the result
if( position == -1){
     console.log(`Elemnt on Found !`)
} else {
   
    console.log(`Element found at this index : ${position}`)
}


// Binary Search Function

function binarySearch(array , tValue){

     // Set the initial left and right pointers
    let left = 0;
    let right = array.length - 1;

     // Continue searching while left pointer is less than or equal to right
    while(left <= right){

         // Calculate the middle index
        let mid = Math.floor((left + right) / 2);

         // Check if the middle element is equal to the target value
        if(array[mid] == tValue){
            return mid; // Target found, return index
        }else if(array[mid] < tValue){
             // If target is greater, ignore the left half
            left = mid + 1;
        }else{
             // If target is smaller, ignore the right half
            right = mid - 1;
        }
    }
    return - 1; // Target not found
}

// Sample sorted array
let array = [10,15,20,30,35,40,45,50,55,60];

// Target value to search for
let tValue = 35;

// Call binary search function
let result = binarySearch(array, tValue);

// Output the result
if(result == - 1){
    console.log(`Value not found`);
}else{
    console.log(`Value found at this index ${result}`)
}