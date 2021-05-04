const isPalindrome = (num) => {
    if (num < 0) return false;
    if (num < 10) return true;
    if (num % 10 === 0) return false;

    function reverseInt(num) {
        const reversed = num.toString().split('').reverse().join('');
        return parseInt(reversed) * Math.sign(num);
    }

    if (num === reverseInt(num)) {
        return true;
    } else {
        return false;
    }
}