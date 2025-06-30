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

//Get a sequence of number + operator then clean the display
const getNumOpSequence=function(){
    const btnContainer = document.querySelector("#buttonContainer");
    const display = document.querySelector("#display");

    btnContainer.addEventListener("click",function(e){
        if (e.target.hasAttribute("data-value")){
            const buttonClicked=e.target;
            display.textContent += buttonClicked.getAttribute("data-value");
        }
    });

    btnContainer.addEventListener("click", function(e){

        const buttonClicked=e.target;

        if (buttonClicked.hasAttribute("data-equal")){
            return arr[3]=display.textContent;
        } else if(buttonClicked.hasAttribute("data-operator")){
            
            function getNum(){
                return arr[0]=display.textContent;
            }
            getNum()

            function getOperator(){
                return arr[1]=buttonClicked.getAttribute("data-operator")
            }
            getOperator()

            function cleanDisplay(){
                display.textContent = ""
            }
            cleanDisplay()
            console.log(arr)
        } 
    });

    
};

getNumOpSequence()



