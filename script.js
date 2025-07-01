let firstNum = null;

let secondNum = null;

let operator = null;

let arr = [];

const add = function(num1,num2){
    return num1+num2
};

const substract = function(num1,num2){
    return num1-num2
};

const multiply =function(num1,num2){
    return num1*num2
};

const divide = function(num1,num2){
    return num1/num2
};

const operate = function(num1,num2,operator){
    if (operator === "+"){
        return add(num1,num2)
    } else if (operator === "-"){
        return substract(num1,num2)
    } else if (operator === "*"){
        return multiply(num1,num2)
    } else if (operator==="/"){
        return divide(num1,num2)
    } else {
        return "Oops,error"
    }
};






