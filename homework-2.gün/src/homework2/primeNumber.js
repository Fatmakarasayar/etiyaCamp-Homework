// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.




function findPrimeThousand() {
    for (let i = 2; i < 1000; i++) {
        let primeOrNot=true
        for (let k = 2; k < i; k++) {

            if (i%k==0){
                primeOrNot=false

                }
            
           
            
        }
        if (primeOrNot){
            console.log(i)
        }
    }
}

findPrimeThousand()

