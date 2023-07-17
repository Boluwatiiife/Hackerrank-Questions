function fizzBuzz(xx){
    for(let i=1;i<=xx;i++){
        if((i%5===0)&&(i%3===0)){
            console.log('FizzBuzz');
        }
       
        else if(i%3===0){
            console.log('Fizz');
        }
        else if(i%5===0){
            console.log('Buzz');
        }
        
        else{
            console.log(i)
        }
    }
}

console.log(fizzBuzz(9));