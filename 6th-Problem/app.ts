export function factorial(num: number): number {
    let facto: number = 1;
    for (let i = num; i > 0; i--) {
        facto *= i;
    }
    return facto;
}
console.log(factorial(5));

function fact(n: number): number {
    if (n === 0) {
        return 1;
    }
    return n * fact(n - 1);
}
console.log(fact(6));