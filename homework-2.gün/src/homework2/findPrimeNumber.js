

function findPrime(...num) {

    let primeOrNot = true;
    for (let i = 0; i < num.length; i++) {
      if (num[i] <= 1) {
        console.log("Girdiğiniz sayı 2'den küçük olamaz ! : " + num[i]);
      }
      for (let j = 2; j < num[i]; j++) {
        if (num[i] % j == 0) {
          if (primeOrNot) {
            console.log("Girdiğiniz sayı asal değildir:" + num[i]);
          }
          primeOrNot = false;
        }
      }
      if (primeOrNot && num[i] > 1) {
        console.log("Girdiğiniz sayı asaldır:" + num[i]);
      }
      primeOrNot = true;
    }
  }
  
  findPrime(1, 0, -5, 5, 12, 17, 8, 15, 37, 2, 7, 21, 1, 0);