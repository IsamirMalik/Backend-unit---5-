function isPrime(num){

    if(num < 2){
        return false
    }

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            // console.log(false)
            return false;
        }
    }
    // console.log(true)
    return true;
}

module.exports = isPrime;