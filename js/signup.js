var alert = document.getElementById('alert');
var username = document.getElementById('user-name');
var userEmail = document.getElementById('user-email');
var password = document.getElementById('user-password');
var signupBtn = document.getElementById('signupBtn');
var users = [];

if (localStorage.getItem('user') != null) {
    users = JSON.parse(localStorage.getItem('user'));
}
signupBtn.addEventListener('click', function() {
    var user = {
        nname: username.value,
        mail: userEmail.value,
        ppassword: password.value
    };
    if (isempty()){
        getAlert('All inputs are required', 'red');
    } else {
        if (havAcount()) {
            getAlert('Already Have Account !', 'red');
        } else {
            users.push(user);
            localStorage.setItem('user', JSON.stringify(users));
            clearInputs();
            getAlert('Account created , You can Sign in!', 'green');
        }
    }

    function getAlert(text, color) {
        alert.classList.replace('d-none', 'd-block');
        alert.innerHTML = text;
        alert.style.color = color;
    }

    function clearInputs() {
        username.value = '';
        password.value = '';
        userEmail.value = '';
    }

    function isempty() {
        if (username.value == '' || userEmail.value == '' || password.value == '') 
            return true;
        else 
            return false;
    }

    function havAcount() {
        for (var i = 0; i < users.length; i++) {
            if (users[i].mail == userEmail.value) 
                return true;
        }
        return false;
    }
});
