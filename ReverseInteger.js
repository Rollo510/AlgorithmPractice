const reverseInteger = (x) => {
    if (x < 0) return -1 * reverseInteger(-x);
    const solution = (x+"").split('').reverse().join('');
    return (solution > 2**31 -1) ? 0 : solution;
}