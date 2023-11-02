let passwordForm = document.forms.password_form
let usersInput = document.querySelectorAll("input")
let mainHeading = document.getElementById("main")
mainHeading.style.color = "green";
passwordForm.onsubmit=  (e)=>{
  e.preventDefault();
  let formErr ={
    passwordErr: "",
    confirm_passwordErr: "",

  }
  let password = passwordForm.password.value.trim();
  let confirm_password= passwordForm.confirm_password.value.trim();
  let userStrictInput = [1-100,"$%^&*()+=@#!?|~|","must be more than 8 characters"];
  console.log(userStrictInput);
  if(password == ""){
    formErr.passwordErr = "must be a valid password";

  }else if(password.length < 8 || password.includes("/%^&*$()-+=@#!?|~|/")){
   formErr.passwordErr = "must contain more than 8 characters. uppercase letter,lowercase letters with any special characters like($%^&*()+=@#!)";

  }else if(confirm_password == ""){
    formErr.confirm_passwordErr ="please fill in the blank";

  }else if(confirm_password.length != password.length || !confirm_password.match(password)){ 
    formErr.confirm_passwordErr = "must match your password value";

  }else{
    console.log({password,confirm_password});
    alert("you have sucessfully created a password, your password is " + password)
  }
  let errElement = document.querySelectorAll(".err");


  console.log(errElement);
  for(let i=0; i < errElement.length; i++){
   let errElements= errElement[i];

    console.log(formErr);
    errElements.innerHTML= formErr[""+errElements.dataset.err+""]

    

    





  }
  


}





















