
function twoSum (arr, target){
    let n = arr.length;

    for(let i = 0; i < n ; i ++){
        for(let j = i + 1; j < n; j ++){
            let sum = arr[i] + arr[j];

            if(sum === target){
                return [i + 1, j + 1];
            }
        }
    }
    return [-1 , -1]
}

let arr = [3,2,4];
let target = 6;

let result = twoSum(arr, target);

for(const num of result){
 process.stdout.write(num + " ")
}

console.log()



function TwoSum(num, tValue){
    let left = 0;
    let right = num.length - 1;

    while(left < right){
        let Sum = num[left] + num[right];
        if(Sum === tValue){
            return [left , right]
        } else if(Sum < target){
            left ++;
        }else{
            right --;
        }
    }

    return [-1,-1]

}

let num = [2,3,4,5,6,7];
let tValue = 8;
let output = TwoSum(num, tValue);

console.log(output.join(" "))