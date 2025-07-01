let firstNum = null;

let secondNum = null;

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

const calculatorLogic = function(){
    
    const btnContainer = document.querySelector("#buttonContainer");
    const display = document.querySelector("#display")
   
    function populateDisplay(){
        btnContainer.addEventListener("click",function(e){
            const btnClicked = e.target;
            if(btnClicked.hasAttribute("data-value")){
                display.textContent += btnClicked.getAttribute("data-value")
            }
        })
    };
    populateDisplay()
};

calculatorLogic()

//Mechanic : 
//I click on buttons and it prompts a number on the display
// I use the click on an operator to store the value and the operator. 
//The display is cleared
// the user can continue to enter more number. 
// if he clicks again on an operator, I hold the temporary result and the operator. They can continue to type in numbers. 
// when he clicks on =, display the result. 





