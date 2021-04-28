const twoSum = (nums, target) => {

    let storage = {};

    for (let [index, num] of nums.entries()) {
        if(storage[num] !== undefined) return [storage[num], index];
        storage[target-num] = index;
    }
    
}

function twoSum(nums, target) {

    const comp = new Map();
    const len = nums.length;
    

}