export function palindrome(string: string): boolean {
    let str = string.split("").reverse().join("");
    return string === str ? true : false;
}
console.log(palindrome("level"));