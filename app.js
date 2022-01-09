const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const btnCheck = document.querySelector("#btn-check")
const btnOutput = document.querySelector("#output")

const addNumber = (dob) => {
    dob = dob.replaceAll("-", "")
    dob = [...dob]
    // console.log(dob)
    let sum = 0;
    sum = dob.reduce(function (previousValue, currentValue) {
        return previousValue + Number(currentValue)
    }, 0)
    // console.log(sum)
    return sum
}

const isYourBirthdayLucky = (dob, luckyNumber) => {
    if (dob % luckyNumber.value === 0)
        btnOutput.innerText = "Yeah your Birthday is Lucky 🎉"
    else
        btnOutput.innerText = "Bad Luck , No Lucky Birthday 😞"
}

const EventHandler = () => {
    var dob = dateOfBirth.value;
    var sum = addNumber(dob);

    isYourBirthdayLucky(sum, luckyNumber)
}

btnCheck.addEventListener("click", EventHandler)