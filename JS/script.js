const numbers = document.querySelectorAll("#numbers button");
const submit = document.querySelector("#button");
const firstDisplay = document.querySelector(".feedback");
const secondDisplay = document.querySelector(".thankpage");
const errorMsg = document.getElementById("error");
let result = document.getElementById('output')
let selectedNumber = ""; // Track the selected number

firstDisplay.style.display = "block";
secondDisplay.style.display = "none";
errorMsg.style.display = "none"; // Initially hide the error message

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        // Remove active class from all buttons
        numbers.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        number.classList.add('active');
        selectedNumber = e.target.textContent;
        result.textContent = e.target.textContent
        errorMsg.style.display = "none"; // Hide error message when a number is selected
    });
});

submit.addEventListener('click', () => {
    // Check if no number has been selected
    if (selectedNumber.trim() === "") {  
        errorMsg.style.display = "block";  // Show error message
        firstDisplay.style.display = "block";
        secondDisplay.style.display = "none";
    } else {
        firstDisplay.style.display = "none";
        secondDisplay.style.display = "block";
        // errorMsg.style.display = "none"; // Hide error message on successful submit
    }
});













      