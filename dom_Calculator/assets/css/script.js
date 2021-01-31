const numberButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operation")
const additionButton = document.querySelectorAll(".addition")
const equalButton = document.querySelectorAll(".equal")
const allClearButton = document.querySelectorAll(".all-clear")
const deleteButton = document.querySelectorAll(".delete")
const input = document.querySelector("#input")



var exp=""
numberButtons.forEach(button => {
    button.addEventListener("click", calc)
})

function calc(e){
    input.innerHTML=exp
    e.preventDefault()
    switch(this.id){
        case "1":
            exp+="1"
            input.innerHTML=exp
            break;
        case "2":
            exp+="2"
            input.innerHTML=exp
            break;
        case "3":
            exp+="3"
            input.innerHTML=exp
            break;
        case "4":
            exp+="4"
            input.innerHTML=exp
            break;
        case "5":
            exp+="5"
            input.innerHTML=exp
            break;
        case "5":
            exp+="5"
            input.innerHTML=exp
            break;
        case "6":
            exp+="6"
            input.innerHTML=exp
            break;
        case "7":
            exp+="7"
            input.innerHTML=exp
            break;  
        case "8":
            exp+="8"
            input.innerHTML=exp
            break;
        case "9":
            exp+="9"
            input.innerHTML=exp
            break;
            case "+":
                exp+="+"
                input.innerHTML=exp
                break;
            case "-":
                exp+="-"
                input.innerHTML=exp
                break;
                case "*":
                    exp+="*"
                    input.innerHTML=exp
                    break;
                case "/":
                    exp+="/"
                    input.innerHTML=exp
                    break;
    }
}

document.querySelector(".equal").addEventListener("click", function(){
    input.innerHTML = eval(input.innerHTML.toString());
})





