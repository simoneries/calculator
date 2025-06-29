let num1 = 0

let num2 = 0

let operator = 0

const add = function(num1,num2){
    return num1+num2
}

const substract = function(num1,num2){
    return num1-num2
}

const multiply =function(num1,num2){
    return num1*num2
}

const divide = function(num1,num2){
    return num1/num2
}

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
}

const populateDisplay=function(){
    // Function that updates and store the variables displayed to do the operations
    // Mechanic 1: You press a button, it displays a number. You can keep doing that until you press on the operator, then it's a call to save the number as variable.
    const btnsClicked = document.querySelectorAll("button")
    btnsClickedArray = Array.from(btnsClicked)
    console.log(btnsClickedArray)
    // 1 : You need to pass query selectors to all your buttons. 
    
    // 2 : They need to be able to display the right numbers to the display. 
    //Mechanic 2 : you clear the display and you do the same. 
}
 populateDisplay()