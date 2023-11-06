
const username = document.querySelector('#username').value
const password = document.querySelector('#password').value
const submit = document.querySelector('.submit').value


var attempt = 3;


function validate(){

    if( username.value == 'ekenedili'  && password.value == '1mightygrace'){
        alert('You have successfully logged in')

        window.location = "success.html";

    } else {
        attempt = --attempt;

        alert(`You have ${attempt} left`)
    
        if(attempt == 0){
            username.disabled = true
            password.disabled = true
            submit.disabled = true
            
            
            alert('Form disabled!')
            
        }
    }

}

submit.addEventListener('submit', validate)