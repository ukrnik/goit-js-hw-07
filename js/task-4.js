const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    const object = {
        email,
        password,
    };

    if (email === '' || password === '') {
        alert("'All form fields must be filled in'");
        return;
    } else {
        console.log(object);
        form.reset();
    }
}
