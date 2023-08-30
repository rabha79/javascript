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
