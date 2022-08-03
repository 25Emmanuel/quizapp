var array = [
    {question: "what is the sum of 2 + 3", id: 1},
    {question: "what is the square-root of 25", id: 2},
    {question: "what is the 25 degree Celsius in Fahrenheit", id: 3},
    {question: "what is the sides a polygon has?", id: 4},
    {question: "what is the freezing point of water in Celsius", id: 5},
    {question: "what is the boiling point of water in Celsius", id: 6},
    {question: "How many Inches makes a foot", id: 7},
    {question: "what is the formula to find the Area of a Square", id: 8},
    {question: "How many Meters makes 1 Kilometer", id: 9},
    {question: "what is the sum of 2 + 3", id: 10}
]
// console.log(Object.entries(array[0].option));

var main = document.querySelector("div");
var button = document.querySelector("button")
var testp = document.querySelector("#testp")
var pbutton = document.querySelector("#pbutton")
var corrector = document.querySelector("#corrector")
var input = document.querySelector(".enter")
var retry = document.querySelector("#re-try")

const tester = () => {
    var i = document.createElement("i")
    console.log("working-3");
    i.classList.add("fa-solid", "fa-check", "correct")
    console.log("working-4!!!");
    
    if (input.value === "") {
        alert("you have not entered any answer..")
    } else if (input.value !== "4") {
        console.log("working");
        retry.style.display = "block"
        console.log("still working");
        setInterval(()=> {retry.style.display = "none"}, 3000)
        input.value = ''
    }
    else {
        corrector.style.display = "block"
        setInterval(()=> {corrector.style.display = "none"}, 3000)
        nextQuestion()
        input.value = ''
    }
}
function nextQuestion () {
    if (input.value === "") {
        alert("the input field is empty")
    } else if (input.value != "4") {
        retry.style.display = "block"
        setInterval(()=> {retry.style.display = "none"}, 3000)
        input.value = ''
    }
    else {
        // var text = document.createTextNode(array[0].question);
        testp.textContent = array[0].question;
        corrector.style.display = "block"
        setInterval(()=> {corrector.style.display = "none"}, 3000)
        input.value = ''
    }
    console.log('working');
}
button.addEventListener("click", nextQuestion)
pbutton.addEventListener("click", tester)
