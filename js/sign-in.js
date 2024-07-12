const signInForm = document.querySelector('#signInForm');
const submitForm = document.querySelector('#signInBtn');
const userNameOrEmailInput = document.querySelector('#userSignInNameOrMail');
const userPasswordInput = document.querySelector('#userSignInPassword');
const showPasswordBtn = document.querySelector('#showPasswordBtn');
const error = document.querySelector('.inputs-container > span');

showPasswordBtn.addEventListener('click', () =>{
    if(userPasswordInput.getAttribute('type') === 'password'){
        userPasswordInput.setAttribute('type', 'text');
    } else {
        userPasswordInput.setAttribute('type', 'password');

    }
});


signInForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (userNameOrEmailInput.value == '' || userPasswordInput.value == '') {
        error.classList.remove('error');
    }else {
       console.log('red')
       error.classList.add('error');

    }

});