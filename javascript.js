// tack 1
var text = Number("10");
console.log(text);
// task2
var candies = {
    chocolate: 10,
    lollipops: null,
    sourStrips: undefined,
    jellyBeans: 8,
    licorice: null
}
if(candies.lollipops ==null && candies.sourStrips ==undefined && candies.icorice ==null ){
    console.log(candies.lollipops ?? "Available now instead of lollipops is gummyBears");
    console.log(candies.sourStrips ?? "Available now instead of sourStrips is gummyBears");
     console.log(candies.licorice ?? "Available now instead of licorice is gummyBears");
}
// tack3
var shawarma = {
    meat : 2,
    chick :3
}
function getShawarma(name,age){
    if(age >= 20){
        console.log(shawarma.meat)
    }else{
        console.log(shawarma.chick)
    }
}
getShawarma("Rabha",21)
getShawarma("dina",17)
// task4
function calculate(number1,number2,method){
    if(method == "sum"){
        var result = number1 + number2 
        console.log(result)
    }else if(method == "sub"){
        var result = number1 - number2 
        console.log(result)
    }else if(method == "multi") {
        var result = number1 * number2 
        console.log(result)
    }else if(method == "div"){
        var result = number1 / number2 
        console.log(result)
    }else{
        console.log("unknown method , try again ")
    }
}
calculate(2,3,"sum")
calculate(2,3,"sub")
calculate(2,3,"multi")
calculate(2,3,"div")
calculate(2,3,"rrr")
// task 5
switch(3){
    case 1:
        console.log("January");
        break;
    case 2:    
       console.log("February");
       break; 
    case 3:    
       console.log("March");
       break; 
    case 4:    
       console.log("April");
       break; 
    default:
        console.log("This month there is no booking");      
}
// Another method
switch(3){
    case 1:
        console.log("January");
    case 2:    
       console.log("February");
    case 3:    
       console.log("March");
    case 4:    
       console.log("April");     
}
// task 6
var age = 17;
var res = (age >= 30) ? "You are allowed to enter" : "You are not allowed to enter";
console.log(res);  
// Another method
var res = ( 21%11 == 10 ) ? "the result is 10" : "the result is 5";
console.log(res);
// search task
/*
casting
when we want to turn from number to string and The opposite is true
*/
var x = 15;
console.log(x.toString());