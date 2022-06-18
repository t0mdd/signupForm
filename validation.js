let passwordInputs = 
  document.querySelectorAll('.ribbon-container input[type=\'password\'');
let errorMsg = document.querySelector('.error-msg');
for(passwordInput of passwordInputs){
  passwordInput.addEventListener('keyup',()=>validatePasswords());
}
function validatePasswords(){
  if(passwordInputs[0].value !== passwordInputs[1].value){
    errorMsg.textContent = "Passwords do not match.";
    for(passwordInput of passwordInputs){
      passwordInput.classList.add('password-invalid');
    }
  }
  else {
    errorMsg.textContent = "";
    for(passwordInput of passwordInputs){
      passwordInput.classList.remove('password-invalid');
    }
  }
}