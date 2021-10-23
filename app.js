var dateOfBirth = document.querySelector("#date-of-birth")
var luckyNumber = document.querySelector("#lucky-number")
var btnCheck = document.querySelector("#btn-check")

function addNumber(dob) {
    dob = dob.replaceAll("-", "")
    let sum = 0;
    for (let i = 0; i < dob.length; i++)
        sum = sum + Number(dob.charAt(i));
    console.log(sum)
}

function EventHandler() {
    addNumber(dateOfBirth.value)
    console.log(`Clicked ${dateOfBirth.value} ${luckyNumber.value} `)
}

btnCheck.addEventListener("click", EventHandler)