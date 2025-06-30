let num1 = null;

let num2 = null;

let operator = null;

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

const populateDisplay=function(){
    // Function that updates and store the variables displayed to do the operations
    // Mechanic 1: You press a button, it displays a number. 
    const btnContainer = document.querySelector("#buttonContainer ");
    const display = document.querySelector("#display");
    btnContainer.addEventListener("click",function(e){
        if (e.target.hasAttribute("data-value")){
            const buttonClicked=e.target
            //modify the content of the display - pb here it's only updating ea
            display.textContent += buttonClicked.getAttribute("data-value");
        }
    });
}

 populateDisplay()