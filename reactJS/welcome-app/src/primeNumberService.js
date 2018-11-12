export default class PrimeNumberService{
    isNumberPrime(event){
        var isPrime;
        if (event === null || event === "") {
            isPrime = null;
        }
        for (let i = 2; i < event; i++) {
            if (event % i === 0) {
                isPrime = false;
                break;
            }
            else {
                isPrime = true;
            }
        }
        return isPrime;
    }
}