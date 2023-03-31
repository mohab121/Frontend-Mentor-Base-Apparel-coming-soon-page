
const submit = document.querySelector('button');
const alert = document.querySelector('.alert');
const email = document.querySelector('.email');
const errorIcon = document.querySelector('.error')

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value === '' || !re.test(email.value)) {
        alert.classList.remove('hidden');
        errorIcon.classList.remove('hidden');
    }  else {
        alert.classList.add('hidden');
        errorIcon.classList.add('hidden');
    }
})