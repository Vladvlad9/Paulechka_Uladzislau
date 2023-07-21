function getSum(a, b) {
    if (a === b) {
        return a;
    } else {
        let min = Math.min(a, b);
        let max = Math.max(a, b);
        let sum = 0;
        for (let i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    }
}

console.log(getSum(-2, 1))