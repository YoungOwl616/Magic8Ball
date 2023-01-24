const eightBallViewport = document.querySelector("#eight-ball-viewport");
const userInput = document.querySelector("#user-input");
const consultBtn = document.querySelector("#consult-btn"); 

let answerArray = [`<span class='answer-span'>Yes</span>`, `<span class='answer-span'>No</span>`, `<span class='answer-span'>Maybe</span>`];

consultBtn.addEventListener("click", function() {
    let randNum = Math.floor(Math.random() * 3);

    if (userInput.value.indexOf('?') > -1 && userInput.value.length > 1) {
        eightBallViewport.innerHTML = answerArray[randNum];
        userInput.value = "";
    } else {
        alert("Please ask a question that includes a '?'...")
        userInput.value = "";
    }
})