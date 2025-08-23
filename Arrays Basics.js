// Javascript program to implement linear 
// search in unsorted array


// Function to implement search operation

function findValue(arr,n,target){
    let i;
    for(let i = 0; i < n; i ++){
        if(arr[i] == target){
            return i;
        }
    }

    return -1
}

 // Driver program

let arr = [12,25,13,11,16,17,10,14,15];
let n = arr.length;

// Using a last element as search element

let target = 27;
let position = findValue(arr,n,target);

if(position == -1){
    console.log('Value not founded in this array!')
}else{
    console.log(`Value founded in this index ${position}`)
}