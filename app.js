let calculatorOutput = document.getElementById("calculatorOutput");


function numbers(a){
    if(calculatorOutput.innerText.indexOf("0") !== 0){
        calculatorOutput.innerText = calculatorOutput.innerText + a
    }
    else{
        calculatorOutput.innerText = ""

        calculatorOutput.innerText = calculatorOutput.innerText + a
    }
    
}

function signs(a){
        calculatorOutput.innerText = calculatorOutput.innerText + a
}

function ac(){
    calculatorOutput.innerText = 0
  
 }

function calculate(){
    calculatorOutput.innerText = eval(calculatorOutput.innerText)
}




