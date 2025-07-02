let operator = null;

let arr = []

let timesCalled = 0

let result = null

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

    function operateNum(){ //Modify an existing array, operate on numbers, loop or get a result

        btnContainer.addEventListener("click", function(e){ 
            const btnClicked = e.target;
            if(btnClicked.hasAttribute("data-operator") && timesCalled == 0){
                saveNum(e)
                display.textContent = ""
                timesCalled += 1;
            } else if (btnClicked.hasAttribute("data-operator")){
                let firstNum = arr[0]
                secondNum=display.textContent;
                arr[0] = operate(Number(firstNum),Number(secondNum),arr[1])
                arr[1] = btnClicked.getAttribute("data-operator")
                console.log(arr)
                display.textContent = ""

            } else if (btnClicked.hasAttribute("data-equal")){ //click on equal
                let secondNum = display.textContent;
                result = operate(Number(arr[0]),Number(secondNum),arr[1])
                console.log(result)
            }
            //Block at the initial state
            //Save numbers in arr
            //Operate the numbers
            //Modify result

        //Block after the code has been run a first time.
            //Modify the arr with the given result.
            //save the operator
            //Modify result
        })
        
    }
    
    function saveNum(e){
        const opClicked = e.target
        arr[0]= display.textContent
        arr[1]= opClicked.getAttribute("data-operator")
    }
    operateNum()

    
};

calculatorLogic()
console.log(arr)







