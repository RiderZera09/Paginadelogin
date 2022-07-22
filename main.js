const btnlogin = document.getElementById('form');

btnlogin.addEventListener("submit",redirect);

function redirect(e){
    e.preventDefault()
    windows.open("https://www.youtube.com/");   
};