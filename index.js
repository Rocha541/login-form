const userName = document.getElementById("username");
const password = document.getElementById('password');
const form = document.getElementById('form');
const passwordConfirm = document.getElementById('password-confirm');
const Email = document.getElementById('email');

form.addEventListener("submit", (event) =>{
    event.preventDefault();

 checkForm()

});


email.addEventListener("blur", () => {
    validadeEmail();
})

userName.addEventListener("blur", () => {
    validadeUserName();
})


function validadeUserName(){
     const  userNameValue = userName.value;
    
    if(userNameValue === ""){
      errorInput(userName, "digite nome do usuario!")
    
} else {
    const formItem = userName.parentElement;
    formItem.className= 'form-content'
  }
}

function validadeEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, 'digite  seu email')
    } else{
        const formItem = email.parentElement;
    formItem.className= 'form-content'
        
    }
}

function validadePassword(){
    const passwordValue = password.value;
    if(passwordValue === ""){
        errorInput(password, 'digite sua senha')
    } else if(passwordValue > 8){ 
       errorInput(password, "a senha deve ter no mínimo 8 caracteres")
    }else{
        const formItem = password.parentElement;
    formItem.className= 'form-content'
    }
}

function validadePasswordConfirm(){
    const passwordValue = password.value;
    const confirmPasswordValue =passwordConfirm.value;

    if(confirmPasswordValue === ""){
        errorInput(passwordConfirm, 'Confirme sua senha!')
    } else if(confirmPasswordValue !== passwordValue){
        errorInput(passwordConfirm, "as senhas estão diferentes")
    } else{
        const formItem = passwordConfirm.parentElement;
    formItem.className= 'form-content'
    }
}


function checkForm(){
    validadeUserName();
   validadeEmail();
   validadePassword();
   validadePasswordConfirm();

   const formItems = form.querySelectorAll(".form-content");

   const isValid =[...formItems].every( (item)  =>{
    return item.className === "form-content"
   });
 
   if(isValid){
    alert("CADASTRADO COM SUCESSO!")
   }
}


function errorInput(input,menssage){
    const formItem = input.parentElement;
    const textmenssage = formItem.querySelector("a")

    textmenssage.innerText = menssage;

    formItem.className = "form-content error"
}