const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(){
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
})


function registerButton(){

  fieldsAreValid()
  // changePage()
  registerPage()
}


function registerPage(){
}

function changePage( event){
 
  if(errorEmail( ) && errorName && errorDate() && errorGender() &&  errorSelect && errorTel() ){
      event.preventDefault()
      window.location.href = "/pages/register.html"

  }
      
}

function fieldsAreValid(){
  isNameIsNotEmpyt()
  isEmailIsNotEmpyt()
  telIsNotEmpyt()
  dateIsNotEmpyt()
  genderIsValid()
  selectIsValid()
  menssageIsValis()
}


function errorName(){
  if(!form.name().value){
      return false
  }
  return true
}

function isNameIsNotEmpyt(){
  form.error_name().style.display =  errorName() ? "none" : "block"

}

function errorEmail(){
  if(!validateEmail(form.email().value)){
      return false
  }
  return true
}

function isEmailIsNotEmpyt(){
  form.error_email().style.display = errorEmail() ? "none" : "block"
}

function validateEmail(email){
  return /\S+@\S+\.\S+/.test(email)
}


function errorTel(){
  if(!form.tel().value){
      return false
  }
  return true
}

function telIsNotEmpyt(){
  form.error_tel().style.display = errorTel() ? "none" : "block"
}

function errorDate(){
  if(!form.date().value){
      return false
  }
  return true
}

function dateIsNotEmpyt(){
  form.error_date().style.display = errorDate() ? "none" : "block"

}
function errorGender(){
  let checked = false;
  for( const radio of form.gender()){
      if(radio.checked){
          checked = true
          break;
      }


  }
  return checked;
}

function genderIsValid(){

  form.error_gender().style.display = errorGender() ? "none" : "block"

}

function errorSelect(){
  if(form.select().value === ""){
      return false
  }
  return true
}


function  selectIsValid(){
  form.error_select().style.display = errorSelect() ? "none" : "block"
}




function clearFields(){
  const inputs = document.querySelectorAll("input")
  inputs.forEach(input => input.value ="")

  form.select().selectedIndex = 0

  form.gender().forEach(radio => radio.checked = false)

  form.form_menssage().value = ""

}


const form ={
  name: () => document.getElementById("name"),
  error_name: () => document.getElementById("error_name"),

  email: () => document.getElementById("email"),
  error_email: ()=> document.getElementById("error_email"),

  tel: () => document.getElementById("tel"),
  error_tel: ()=> document.getElementById("error_tel"),

  date: () => document.getElementById("date"),
  error_date: () => document.getElementById("error_date"),
  
  gender: () => document.getElementsByName("radio"),
  error_gender: () => document.getElementById("error_gender"),

  select: () => document.getElementById("sel_form"),
  error_select: ()=> document.getElementById("error_select"),


  registerBtn: ()=> document.getElementById("registerBtn"),
  titleRegister: ()=> document.getElementById("titleRegister"),

}