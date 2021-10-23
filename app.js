var dateOfBirth = document.querySelector("#date-of-birth")
var luckyNumber = document.querySelector("#lucky-number")
var btnCheck = document.querySelector("#btn-check")
var btnOutput = document.querySelector("#output")

function addNumber(dob) {
    dob = dob.replaceAll("-", "")
    let sum = 0;
    for (let i = 0; i < dob.length; i++)
        sum = sum + Number(dob.charAt(i));
    return sum
}

function isYourBirthdayLucky(dob, luckyNumber) {
    if (dob % luckyNumber.value === 0)
        btnOutput.innerText = "Yeah your Birthday is Lucky 🎉"
    else if (dob && luckyNumber.value)
        btnOutput.innerText = "Please Enter in the respected field"
    else
        btnOutput.innerText = "Bad Lucky , No Lucky Birthday 😞"
}

function EventHandler() {
    var dob = dateOfBirth.value;
    var sum = addNumber(dob);

    isYourBirthdayLucky(sum, luckyNumber)

}

btnCheck.addEventListener("click", EventHandler)