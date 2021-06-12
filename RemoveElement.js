var removeElement = function (nums, val) {
    let p1 = 0;
    for (let p2 = 0; p2 < nums.length; p2++) {
        if (nums[p2] !== val) {
            nums[p1] = nums[p2];
            p1++;
        }
    }

    return p1;

};

// pointers moving from element to element in array, same as Remove Duplicates from Sorted Array algorithm