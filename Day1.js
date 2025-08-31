// Iterative Binary Search
 
function binarySearch(arr,target){
    let low = 0;
    let high = arr.length - 1;

    while(low <= high){
        let mid = Math.trunc((low + high) / 2)

        if(arr[mid] == target){
            return mid; // If Target found
        }
        if(arr[mid] < target){
            return low = mid + 1; // search right half
        }else{
            return high = mid - 1; // search left half
        }
    }
    return -1 // target not found
}

// Deliver program 

let arr = [12,16,20,26,30,36,42,44]
let target = 36;

let position = binarySearch(arr, target);

console.log(`Element found in this index ${position}`)