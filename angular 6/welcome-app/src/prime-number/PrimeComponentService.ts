export class PrimeComponentService{
    isNumberPrime:number=3;
    i:number;
    isPrime(event:any):number{
        if(event==""){
            this.isNumberPrime=3;
            return this.isNumberPrime;
        }
        for (this.i = 2; this.i < event; this.i++) {
            if(event%this.i==0){
                this.isNumberPrime=1;
                break;
            }
            else{
                this.isNumberPrime=0;
            }
        }
        return this.isNumberPrime;
    }
}