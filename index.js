const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const sendButton = document.querySelector("button");
const passwordInput = document.querySelector("#password");

const emailRegex = /^\S+@\S+.\S+$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

const validation = {
  username: false, 
  email: false,
  password: false,
  confirmPassword: false,
};

function checkIfValid() {


  for (const input of inputs) {
    input.addEventListener("input", function (event) {
      let currentInput = event.target;
  
      if (currentInput.id === "username") {
  
        if (currentInput.value.length >= 5) {
           validation.username = true;
           currentInput.nextElementSibling.textContent = ""

           
        } else {
         validation.username = false;
         currentInput.nextElementSibling.textContent = "Le nom d'utilisateur doit contenir au moins 5 caractères."
        //  console.log( currentInput.nextElementSibling);
         
        }
      }
      if(currentInput.id ==="email"){
        if(emailRegex.test(currentInput.value)){
          // console.log("email ok")
          validation.email = true;

        } else{
          validation.email = false;
           currentInput.nextElementSibling.textContent = "L'email de l'utilisateur n'est pas valide."
        }
      }
      if(currentInput.id === "password"){
        if(passwordRegex.test(currentInput.value)){
          validation.password = true;

        } else{
          validation.password = false;
           currentInput.nextElementSibling.textContent = "Le mots de passe n'est pas correct"
        
           
        }
      }
      if(currentInput.id === "confirmPassword"){
        if( passwordInput.value === currentInput.value){
          validation.confirmPassword = true;

        } else{
          validation.confirmPassword = false;
           currentInput.nextElementSibling.textContent = "Le mots de passe n'est identique."
        }

      }
    });
  }
}

checkIfValid();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log(validation)
  let isValid = validation.username && validation.email && validation.password && validation.confirmPassword
  
  //exemple de nico pour faire ça de manière automatique
  // let isValid = Object.values(validation).every(value => value === true);
  if(isValid){
    form.submit();
  }
});
