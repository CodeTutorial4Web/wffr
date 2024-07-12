const signUpForm = document.querySelector('#signUpForm');
const submitForm = document.querySelector('#signUpBtn');
const userNameInput = document.querySelector('#userName');
const userEmailInput = document.querySelector('#userEmail');
const userPasswordInput = document.querySelector('#userPassword');
const showPasswordBtn = document.querySelector('#showPasswordBtn');
const error = document.querySelector('.inputs-container > span');

showPasswordBtn.addEventListener('click', () =>{
    if(userPasswordInput.getAttribute('type') === 'password'){
        userPasswordInput.setAttribute('type', 'text');
    } else {
        userPasswordInput.setAttribute('type', 'password');

    }
});



signUpForm.addEventListener('submit', (e)=>{

    e.preventDefault();
   
    if (userNameInput.value == '' && userPasswordInput.value == '') {
        error.classList.add('error');
    }else {
       console.log('red')
       error.classList.remove('error');

    }


});