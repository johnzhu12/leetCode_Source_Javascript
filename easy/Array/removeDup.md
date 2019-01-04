# 数组删除重复项

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(var i = 0; i < nums.length-1; i++){
         for(var j = i+1; j < nums.length; j++){
            if(nums[i]==nums[j]){
              nums.splice(j,1);//console.log(nums[j]);
               j--;
           }
        }
    } 
    return nums.length;
};

```