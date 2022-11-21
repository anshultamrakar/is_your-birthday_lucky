const birthDate = document.querySelector("#birth-date")
const luckyNumber = document.querySelector("#lucky-number")
const buttonCheck = document.querySelector("#btn-check")



function checkBirthdayIsLucky(){
    const dateBirth = birthDate.value
    const sum = calculateSum(dateBirth)
    console.log(sum)
}


function calculateSum(dateBirth){
    dateBirth = dateBirth.replace("-" ,"")
    
}



buttonCheck.addEventListener("click" , checkBirthdayIsLucky)

