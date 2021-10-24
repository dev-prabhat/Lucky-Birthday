var dateOfBirth = document.querySelector("#date-of-birth")
var luckyNumber = document.querySelector("#lucky-number")
var btnCheck = document.querySelector("#btn-check")
var btnOutput = document.querySelector("#output")

function addNumber(dob) {
    dob = dob.replaceAll("-", "")
    dob = [...dob]
    let sum = 0;
    sum = dob.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    }, 0)
    return sum
}

function isYourBirthdayLucky(dob, luckyNumber) {
    if (dob % luckyNumber.value === 0)
        btnOutput.innerText = "Yeah your Birthday is Lucky 🎉"
    else
        btnOutput.innerText = "Bad Luck , No Lucky Birthday 😞"
}

function EventHandler() {
    var dob = dateOfBirth.value;
    var sum = addNumber(dob);

    isYourBirthdayLucky(sum, luckyNumber)
}

btnCheck.addEventListener("click", EventHandler)