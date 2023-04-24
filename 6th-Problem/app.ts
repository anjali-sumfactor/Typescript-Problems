export function factorial(num: number): number {
    let facto = 1;
    for (let i = num; i > 0; i--) {
        facto = facto * i;
    }
    return facto;
}
console.log(factorial(5));