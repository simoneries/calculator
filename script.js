
let arr = []

let timesCalled = 0

let result = null

let equalUsed = false

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
        return add(num1,num2)%1==0 ? add(num1,num2): add(num1,num2).toFixed(3);
        
    } else if (operator === "-"){
        return substract(num1,num2)%1==0 ? substract(num1,num2):substract(num1,num2).toFixed(3);
        
    } else if (operator === "*"){
        return multiply(num1,num2)%1==0 ? multiply(num1,num2) : multiply(num1,num2).toFixed(3);
        
    }else if (operator==="/" && num2 == 0){
        return "A number is not divisible by 0."

    } else if (operator==="/"){
        return divide(num1,num2)%1==0 ? divide(num1,num2) : divide(num1,num2).toFixed(3); 
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
            if (equalUsed){
                display.textContent="";
            } 
            if(btnClicked.hasAttribute("data-value")){
                equalUsed=false  //switch off the value when starting typing again
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
            } else if (btnClicked.hasAttribute("data-operator")){//Block when the user click on another operator
                let firstNum = arr[0]
                secondNum=display.textContent;
                arr[0] = operate(Number(firstNum),Number(secondNum),arr[1])
                arr[1] = btnClicked.getAttribute("data-operator")
                console.log(arr)
                display.textContent = ""

            } else if (btnClicked.hasAttribute("data-equal")){ //click on equal
                if(arr.length == 0){
                    display.textContent=""
                } else {
                    let secondNum = display.textContent;
                    result = operate(Number(arr[0]),Number(secondNum),arr[1])
                    display.textContent = result;
                    //clean values
                    equalUsed=true
                    arr=[]
                    timesCalled=0
                    result=null
                    console.log(arr)
                }
                
            }
        })
        
    }
    
    function saveNum(e){
        const opClicked = e.target
        arr[0]= display.textContent
        arr[1]= opClicked.getAttribute("data-operator")
    }
    operateNum()

    
};

const clearButton = function(){
    clearBtn = document.querySelector("#clear")
    clearBtn.addEventListener("click",function(e){
        display.textContent = "";
        result=null;
        arr = [];
        timesCalled = 0
    })
}

calculatorLogic()
clearButton()









