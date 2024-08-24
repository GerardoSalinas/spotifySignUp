

const emailField = document.getElementById('email_address');
const errorBlock = document.getElementById('errorBlock');


emailField.addEventListener('input', function () {
    if(emailField.validity.valid){
        errorBlock.style.display = 'none';
    }else{
        errorBlock.style.display = 'flex';
    }
});