var longestCommonPrefix = function (strs) {

    let shortest = strs.sort((s1, s2) => s1.length - s2.length)[0]

    for (let i = shortest.length; i >= 0; i--) {
        if (strs.every(s => s.slice(0, i) === shortest.slice(0, i))) {
            return shortest.slice(0, i)
        }
    }

    return ""
};