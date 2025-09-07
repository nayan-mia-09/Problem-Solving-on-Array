//Move all Zeros to End of Array

// 1. //[Naive Approach] Using Temporary Array - O(n) Time and O(n) Space

function pushZeroToEnd(arr){
    const n = arr.length;
    const temp = new Array(n);

    let j = 0;

    for(let i = 0; i < n ; i ++){
        if(arr[i] !== 0){
            temp[j++] = arr[i]
        }
    }

    while (j < n){
        temp[j++] = 0;

        for(let i = 0; i < n ; i ++){
            arr[i] = temp[i]
        }
    }
}

const arr = [1,2,4,0,3,5,0];
pushZeroToEnd(arr);

console.log(arr.join(" "));

// 2
// [Better Approach] Two Traversals

function push0ToEnd(arr1){
    let count = 0;

    for(let i = 0; i < arr1.length; i ++){

        if(arr1[i] !== 0){
            arr1[count ++] = arr1[i]
        }
    }

    while(count < arr1.length){
        arr1[count ++] = 0;
    }
}

const arr1 = [2,3,0,4,5,0,6,0]
push0ToEnd(arr1);

console.log(arr1.join(" "));


//3
//[Expected Approach] One Traversal

function PushZeroToEnd(arr2){
    let count = 0;

    for(let i = 0; i < arr2.length; i ++){
        if(arr2[i] !== 0){
            [arr2[i], arr2[count]]= [arr2[count], arr2[i]];
            
            count ++;
        }
        
    }

}
    const arr2 = [1,2,0,3,4,0,5,0];
    PushZeroToEnd(arr2);

    console.log(arr2.join(" "));
