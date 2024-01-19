const num: number = 50;

console.log(`prime numbers between 0 and ${num} are`)
for (let x = 2; x <= num; x++) {
    let isPrime: boolean = true;  
    for (let y = 2; y < x; y++) {
        if (x % y == 0) {
            isPrime = false;
            break;
        }
    }
    if (x > 1 && isPrime) {
        console.log(x);
    }
}
