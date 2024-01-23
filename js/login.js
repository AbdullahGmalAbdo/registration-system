let emailLoginInput = document.getElementById('login-email');
let passwordLoginInput = document.getElementById('login-password');
let loginBtn = document.getElementById('loginBtn');
let alertMassage=document.getElementById('alertMassage');
let userContainer = [];
if (localStorage.getItem('user') != null) {
    userContainer = JSON.parse(localStorage.getItem('user'));
}
function logIn() {
    if(checkInputsEmpty() == true)
    {
        //alert message
        getAlertMessage('All Inputs Required','red')
    }
    else
    {
        if(checkEmailPassword() == true)
        {
            window.location.href='/welcome.html';
        }
        else
        {
            getAlertMessage('Email or Password notCorrect','red');
        }
    }
   
}
function checkEmailPassword() {
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].mail == emailLoginInput.value && userContainer[i].ppassword == passwordLoginInput.value) {
            localStorage.setItem('name',userContainer[i].nname)
            return true;
        }
    }
}
function getAlertMessage(text, color) {
    alertMassage.classList.replace('d-none', 'd-block');
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;
}
function checkInputsEmpty() {
    if ( emailLoginInput.value == '' || passwordLoginInput.value == '')
        return true;
    else
        return false;
}
loginBtn.addEventListener('click', logIn);