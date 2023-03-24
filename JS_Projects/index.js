const buttons = document.querySelectorAll('button');
const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');


// Initialize the variables 

let previousOperand = '';
let currentOperand = '';
let operation = undefined ;

// Append Function 

function appendNumber(number){
    if(number === '.' && currentOperand.includes('.')) return ;
7
    currentOperand = currentOperand.toString() + number.toString();
}


// Update Value 

function updateDisplay(){
    currentOperandTextElement.innerText = currentOperand;
    previousOperandTextElement.innerText = previousOperand;
}


// Attach Click Event Listener to all buttons
buttons.forEach(button=>{
    button.addEventListener('click',() =>{
        const buttonValue = button.getAttribute('data-value')|| button.getAttribute('data-operation');  ;
            switch(buttonValue){

                case 'clear':
                previousOperand = '';
                currentOperand = '';
                operation = undefined ;
                break;


                case 'delete' :
                    currentOperand = currentOperand.toString().slice(0,-1);
                    break;

                case 'equals':
                    if(!operation) return currentOperand;
                    const result = calculate();
                    currentOperand = result;
                    previousOperand = '';
                    operation = undefined ;
                    // return currentOperand;
                    break;


                    case 'add':
                    case 'subtract':
                    case 'multiply':
                    case 'divide':
                    // case 'equals':

                    // case 'data-operation':



                    if(currentOperand === '') return ;

                    if(previousOperand!== ''){
                        const result = calculate();
                    

                    previousOperand = result ;
                    }

                    else{
                        previousOperand = currentOperand;
                    }


                    currentOperand = '';

                    operation = buttonValue;

                    break;

                    default:
                        appendNumber(buttonValue);
                    
            }

            updateDisplay();

            });

        });






        // Function to calculate

        function calculate(){

        const previous = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);


        if(isNaN(previous) || isNaN(current)) return ;

        switch (operation){

            case 'add' :
                return previous+current;



            case 'subtract':
                return previous-current;
            

            case 'multiply':
                return previous*current;

            
            case 'divide':
                return previous/current ;


            default:
                return;
        }

        }

        

    
