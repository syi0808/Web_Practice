var Button = document.getElementById('Login');
var Message = document.getElementsByClassName('InputBox').value;
var Wrn = document.getElementsByClassName('Warning');

Button.addEventListener('click', function(){
    alert(Message);
})