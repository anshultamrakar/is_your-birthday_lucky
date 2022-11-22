const birthDate = document.querySelector("#birth-date")
const luckyNumber = document.querySelector("#lucky-number")
const buttonCheck = document.querySelector("#btn-check")
const outputBox = document.querySelector("#output-box")



function checkBirthdayIsLucky(){
   const dateBirth = birthDate.value
   const sum = calculateSum(dateBirth)
   if(sum && dateBirth){
    compareValue(sum , luckyNumber.value)
   }else {
    outputBox.innerHTML = "Please enter both the fields"
   }
  
}


function compareValue(sum , luckyNumber){
   if(sum % luckyNumber === 0){
    outputBox.innerHTML = "Your birthday is  very lucky 😊 "
   }else{
    outputBox.innerHTML = "Your birthday is not lucky 😔"
   }    
}


function calculateSum(dateBirth){
    dateBirth = dateBirth.replaceAll("-", "")
   let sum = 0 ;
   for(let i = 0 ; i < dateBirth.length ; i++){
    sum = sum + Number(dateBirth.charAt(i))
   }
   return sum;
}







buttonCheck.addEventListener("click" , checkBirthdayIsLucky)

