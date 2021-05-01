const lengthOfLongestSubstring = function(s) {
    
    let start = 0;
    let map = {};
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char in map){
            start = Math.max(start, map[char]+1)
        }

        map[char] = i;

        result = Math.max(result, i - start+1 )
    }

    return result;
}