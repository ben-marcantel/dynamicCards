let text = document.getElementById("textInput");
let submit =document.getElementById("button");
let output = document.getElementById("output");
let counter = 0;
let indexArray =[];
let card = document.getElementsByClassName("newCard");



function createCard(){
    console.log("hello");
    indexArray.push(1);
    let inputText ="";
    for (; counter < indexArray.length; counter++) {  
        function getText(){
            inputText += text.value
            return inputText;
        };
    output.innerHTML += `<div class= newCard id = card ${counter}><button class ="submit" >Delete</button>${getText(inputText)}</div>`;


    for (i = 0; i < card.length; i++) {
        card[i].style.border =  "white";
        card[i].addEventListener("click", function (event) {
            this.parentNode.removeChild(this);     
            // this.classList.add("newCard")add style.
            indexArray.push();
            console.log("nice");

            });
        };
    }
}
submit.addEventListener("click", createCard);


