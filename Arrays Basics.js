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