var num = 50;
console.log("prime numbe between 0 and ".concat(num));
for (var x = 2; x <= num; x++) {
    var isPrime = true;
    for (var y = 2; y < x; y++) {
        if (x % y == 0) {
            isPrime = false;
            break;
        }
    }
    if (x > 1 && isPrime) {
        console.log(x);
    }
}
