<!-- task 4 -->
# simple calculator

## It is used to add, subtract, multiply, or divide two numbers

`
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

`
### this ia an example about calculator
