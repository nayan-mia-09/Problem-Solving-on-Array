// Second Largest Element in an Array
// [Naive Approach] Using Sorting 1

/*The idea is to sort the array in non-decreasing order. Now, we know that the largest element will be at index n - 1. So, starting from index (n - 2), traverse the remaining array in reverse order. As soon as we encounter an element which is not equal to the largest element, return it as the second largest element in the array. If all the elements are equal to the largest element, return -1.*/


// function to find the second largest element

function getSecondLargestNum(arr){
  let n = arr.length;

  // Sort the array in non-decreasing order
  arr.sort((a,b) => a - b);

  // start from second last element as last element is the largest
  for(let i = n -2; i >= 0; i --){
    if(arr[i] !== arr[n - 1]){
        return arr[i];
    }
  }
  // If no second largest element was found, return -1
  return -1;
}

const arr = [21,36,18,20,26,30]
console.log(getSecondLargestNum(arr));

// Output:30
/*Time Complexity: O(n*log(n)), as sorting the array takes O(n*log(n)) time and traversing the array can take O(n) time in the worst case, so total time complexity = (n*log(n) + n) = O(n*log(n)).
Auxiliary space: O(1), as no extra space is required.*/


// [Better Approach] Two Pass Search 2
/*The approach is to traverse the array twice. In the first traversal, find the maximum element. In the second traversal, find the maximum element ignoring the one we found in the first traversal.*/


// JavaScript program to find the second largest element in the array
// using two traversals

function findSecondLargest(arr1){
    let n = arr1.length;

    let largest = -Infinity;
    let secondLargest = -Infinity;

    // Finding the largest element
    for(let i = 0; i < n ; i ++){
        
        if(arr1[i] > largest){
            largest = arr1[i];
        }
    }

     // Finding the second largest element
    for(let i = 0; i < n ; i ++){

        // Update second largest if the current element is greater
        // than second largest and not equal to the largest
        if(arr1[i] > secondLargest && arr1[i] !== largest){
            secondLargest = arr1[i];
        }
    }
    return secondLargest;
}

let arr1 = [21,36,18,20,26,30];

console.log(findSecondLargest(arr1));

// output: 30
/* Time Complexity: O(2*n) = O(n), as we are traversing the array two times.
Auxiliary space: O(1), as no extra space is required */



//[Expected Approach] One Pass Search 3

/* The idea is to keep track of the largest and second largest element while traversing the array. Initialize largest and secondLargest with -1. Now, for any index i,

If arr[i] > largest, update secondLargest with largest and largest with arr[i].
Else If arr[i] < largest and arr[i] > secondLargest, update secondLargest with arr[i]. */


// JavaScript program to find the second largest element in the array
// using one traversal

// function to find the second largest element in the array

function find2ndLargest(arr2){
    let n = arr2.length;

    let largest = -Infinity;
    let secondLargest = -Infinity;
// finding the second largest element
    for(let i = 0; i < n ; i ++){

        // If arr[i] > largest, update second largest with
        // largest and largest with arr[i]
        if(arr2[i] > largest){
            secondLargest = largest;
            largest = arr2[i];

        }
         // If arr[i] < largest and arr[i] > second largest, 
        // update second largest with arr[i]
        else if(arr2[i] < largest && arr2[i] > secondLargest){
            secondLargest = arr2[i]
        }
    }
    return secondLargest;
}

let arr2 = [21,36,18,20,26,30];
console.log(find2ndLargest(arr2));

// output: 30
/* Time Complexity: O(n), as we are traversing the array only once.
Auxiliary space: O(1) */