let welcomeMassage=document.getElementById('nameOfUser');
let logOutBtn=document.getElementById('logout');

if(localStorage.getItem('name') != null)
{
    welcomeMassage.innerHTML = `Welcome ${localStorage.getItem('name')}`
}

function logOut()
{
    //navigate login page
    //remove userName from localstorage
    window.location.href='index.html';
    localStorage.removeItem('userName');
}
logOutBtn.addEventListener('click',logOut)