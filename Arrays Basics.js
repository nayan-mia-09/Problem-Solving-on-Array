// Javascript program to implement linear 
// search in unsorted array


// Function to implement search operation

function findTargetValue(arr, n , target){
    let i;
    for(let i = 0; i < n ; i ++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

 // Driver program

let arr = [23,45,65,32,25,30,49,56];
let n = arr.length;

// Using a last element as search element

let target = 49;
let position = findTargetValue(arr,n,target);

if(position == -1){
    console.log(`Value not founded in this array !`);
}else{
    console.log(`Value founded in this index ${position}`)
}

// search in sorted array

function sortedArrayLinearSearch(arr2, n2 , target2){
    let i ;
    for(let i = 0; i < n2; i ++){
        if(arr2[i] == target2){
            return i;
        }
    }
    return -1;
}

 // Driver program
let arr2 = [10,12,14,16,18,20,22,24,26,28,30];

let n2 = arr2.length;

// Using a last element as search element

let target2 = 22;
let position2 = sortedArrayLinearSearch(arr2, n2 , target2);

if(position2 == -1){
    console.log(`Element  not founded on this array !`);
}else{
    console.log(`Element founded in this index ${position2}`);
}



// binary search in sorted array

function binarySearch(arr3, low, high , target3){
    if(high < low){
        return -1;
    }

    let mid = Math.trunc((low + high) / 2);
    if(target3 === arr3[mid]){
        return mid;
    }

    if(target3 > arr3[mid]){
        return binarySearch(arr3 , (mid +1), high, target3)
    }
    return binarySearch(arr3 , low, (mid - 1), target3)
}


 // Driver program

 let arr3 = [12,14,16,18,20,22,24,26,28,30,32]

 let n3 = arr3.length;

 let target3 = 22;

 let position3 = binarySearch(arr3, 0 , n3 - 1, target3);

 console.log(`Value founded in this index ${position3}`);