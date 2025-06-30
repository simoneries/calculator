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

//Create a function that will store the values and the right operator in an array. 
const populateDisplay=function(){

    let arr = [];
    const btnContainer = document.querySelector("#buttonContainer");
    const display = document.querySelector("#display");

    btnContainer.addEventListener("click",function(e){
        if (e.target.hasAttribute("data-value")){
            const buttonClicked=e.target;
            //modify the content of the display - pb here it's only updating ea
            display.textContent += buttonClicked.getAttribute("data-value");
        }
    });

    //When I click on an operator, I want it to return the value of the number to the array
    btnContainer.addEventListener("click", function(e){
        if(e.target.hasAttribute("data-operator")){
            const buttonClicked=e.target;
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
        }
    console.log(arr)
    } )
};


populateDisplay()