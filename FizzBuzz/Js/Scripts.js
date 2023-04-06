
let number = 100;

for(number=1;number<=100;number++){
    console.log(number);
    if(number%3==0){
        console.log("Fizz");
    }else if(number%5==0){
        console.log("Buzz");
    }else if((number%3 && number%5)==0){
        console.log("FizzBuzz");
    }


}
