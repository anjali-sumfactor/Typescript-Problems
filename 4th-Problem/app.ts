//1.Method:-
export function countStringChar(string: string): number {
    let count:number = 0;
    for (let i = 0; i < string.length; i++) {
        count += 1;
    }
    return count;
}
console.log(countStringChar("hello world"));

//2.Method:-
function countStrChar(string: string): number {
    return string.length;
}
console.log(countStrChar("hello world"));