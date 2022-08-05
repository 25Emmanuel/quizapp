var array = [
    {question: "what is the sum of 2 + 3", id: 0, ans: "5"},
    {question: "what is the square-root of 25", id: 1, ans: "5"},
    {question: "what is the 25 degree Celsius in Fahrenheit", id: 2, ans: "77"},
    {question: "what number of sides does a regular polygon have?", id: 3, ans: "5"},
    {question: "what is the freezing point of water in Celsius", id: 4, ans: "0"},
    {question: "what is the boiling point of water in Celsius", id: 5, ans: "100"},
    {question: "How many Inches makes a foot", id: 6, ans: "12"},
    {question: "what is the formula to find the Area of a Square", id: 7, ans: "L*B"},
    {question: "How many Meters makes 1 Kilometer", id: 8, ans: "1000"},
    {question: "what is the Square root of 81", id: 9, ans: "9"}
]


var main = document.querySelector("div");
var button = document.querySelector("button")
var testp = document.querySelector("#testp")
var pbutton = document.querySelector("#pbutton")
var corrector = document.querySelector("#corrector")
var input = document.querySelector(".enter")
var retry = document.querySelector("#re-try")



var random_number;
var new_question_selector;
var new_question;
var score = 0;
function randomNumAssign () {
    random_number = Math.floor(Math.random() * (array.length));
    console.log(`this random ${random_number}`);
} 
randomNumAssign()
var counter = 0;

var test_ans = array[random_number].ans;

testp.innerHTML = array[random_number].question;

const tester = () => {
    
    
    
    if (input.value === "") {
        alert("you have not entered any answer..")
    } else if (counter === 0 && input.value !== test_ans) {
        
        retry.style.display = "block"
        
        counter++
        setInterval(()=> {retry.style.display = "none"}, 3000)
        
        input.value = ''
        console.log(array);
       
        
        
        array.splice(random_number, 1)
        new_question_selector = Math.floor(Math.random() * (array.length))
        new_question = array[(new_question_selector)].question;
        testp.innerHTML = new_question;

        console.log(array);
    } 
    else if (counter > 0 && counter < 9 && input.value !== array[new_question_selector].ans) {
        retry.style.display = "block"
        setInterval(()=> {retry.style.display = "none"}, 3000)
        input.value = ''
        
        counter++

        array.splice(new_question_selector, 1)
        new_question_selector = Math.floor(Math.random() * (array.length))
        new_question = array[(new_question_selector)].question;
        testp.innerHTML = new_question;

        console.log(array);
        
    } else if (counter === 9 && input.value !== array[new_question_selector].ans) {
        new_question = array[0].question;
        testp.innerHTML = "thanks for participating!";
        array.splice(new_question_selector, 1)
        setInterval(() => {document.location.reload()}, 5000)
        
        input.value = ''
        
        counter++
    }
    else {
        corrector.style.display = "block"
        setInterval(()=> {corrector.style.display = "none"}, 3000)
        console.log(array);
        
        if (counter === 0) {
            array.splice(random_number, 1)
            new_question_selector = Math.floor(Math.random() * (array.length))
            new_question = array[new_question_selector].question;
            testp.innerHTML = new_question;
           
           
        }
        else if (counter === 9 && input.value === array[new_question_selector].ans) {
            console.log(`counter is equal to: ${counter}`);
            console.log(array);
            new_question = array[0].question;
            testp.innerHTML = "thanks for participating!";
            array.splice(new_question_selector, 1)
            setInterval(() => {document.location.reload()}, 5000)
            console.log(array.length);
        }
        

        else {
            array.splice(new_question_selector, 1)
            new_question_selector = Math.floor(Math.random() * (array.length))
            new_question = array[(new_question_selector)].question;
            testp.innerHTML = new_question;
        }       
        
        input.value = ''
           
        console.log(array);
          
        score++
        counter++;
    }
    
    console.log(`final score: ${score}`);
    console.log(`final counter: ${counter}`);

    
    scoreDisplay()
    
}

function scoreDisplay () {
    if (array.length === 0) {
        console.log("i am inside the don side");
        var scoreHolder = document.querySelector(".score-holder")
        var displayedScore = document.createTextNode(`${score}/${counter}`)
        scoreHolder.appendChild(displayedScore)
        var finalScore = document.querySelector(".score")
        

        finalScore.style.display = "block"
        
        setInterval(()=> {finalScore.style.display = "none"}, 3000)

    }
}


function next () {
    if (counter === 0) {
        array.splice(random_number, 1)
        new_question_selector = Math.floor(Math.random() * (array.length))
        new_question = array[(new_question_selector)].question;
        testp.innerHTML = new_question;

        console.log(array);
        input.value = ''
    }
    if (counter > 0) {
        array.splice(new_question_selector, 1)
        new_question_selector = Math.floor(Math.random() * (array.length))
        new_question = array[(new_question_selector)].question;
        testp.innerHTML = new_question;

        console.log(array);
        input.value = ''
    }
    counter++
    console.log(`final score: ${score}`);
    console.log(`final counter: ${counter}`);
}
button.addEventListener("click", next)
pbutton.addEventListener("click", tester)
