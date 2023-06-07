const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calcuator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperationText = ""
    }

    // add digit to calculator screen
    addDigit(digit){

        this.currentOperationText = digit;
        this.updateScreen();

    }

    // Change values of the calculator screen
    updateScreen(){
        this.currentOperationText.innerText += this.currentOperation;
    }

}


const calc = new Calcuator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        const value = e.target.innerText;

        if(+value >= 0 || value === "."){
            calc.addDigit(value);
        } else{
            console.log("Op " + value);
        }

    });
});
