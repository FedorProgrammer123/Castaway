let menu = document.getElementById('menu');
let mobile = document.getElementById('mobile');
let cross = document.getElementById('cross');
let Submit = document.getElementById('Submit');
let names = document.getElementById("name");
let email = document.getElementById("email");
let errors = document.getElementById("errors");
menu.addEventListener("click",function(){
    mobile.style.display = "block";
})
cross.addEventListener("click",function(){
    mobile.style.display = "none";
})
Submit.addEventListener("click",function(){
    if(names.value == "" || names.value == " "){
        errors.innerHTML = "<p style = 'color:#f54242'>Ошибка! Имя не введено</p>";
    }
    else if(email.value == "" || email.value == " "){
        errors.innerHTML = "<p style = 'color:#f54242'>Ошибка! Email не введен</p>";
    }
})