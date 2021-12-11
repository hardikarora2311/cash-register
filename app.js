let billAmount= document.querySelector("#bill-ammount");
let checkBtn= document.querySelector(".check-btn");
let cashGiven= document.querySelector("#cash-given");
let errorMsg= document.querySelector(".error-msg");
const returnChange= document.querySelector(".return");
const noOfNotes= document.querySelectorAll(".no-of-notes");

let showBill = document.querySelector("#bill");
let showCash= document.querySelector("#cash");

const notes= [2000,500,100, 50, 20, 10,5,1];

checkBtn.addEventListener("click", ()=> {
    errorMsg.style.display="none"
    returnChange.innerHTML= "";
    showCash.innerHTML= cashGiven.value;
    showBill.innerHTML= billAmount.value;
    if (parseInt(billAmount.value) > 0){
        if (parseInt(cashGiven.value) >= parseInt(billAmount.value)){
            const returnAmnt= cashGiven.value- billAmount.value;
            printChange(returnAmnt);
        }else{
            showError("Given cash is less than the bill amount.");
        }
    }else{
        showError("Enter valid bill amount ie. greater than 0.");
    }
})

function showError(msg){
    errorMsg.style.display="block";
    errorMsg.innerHTML= msg;
    console.log("error");
}

function printChange(amnt){
    returnChange.innerHTML= amnt;
    for (let i=0; i< notes.length; i++){
        const numberOfNotes=  Math.trunc(amnt/notes[i]);
        amnt %= notes[i];
        noOfNotes[i].innerText= numberOfNotes;
    }
}


