const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        alert("'All form fields must be filled in'");
        return
    }

    console.log(`Email: ${email}, Password: ${password}`);
    form.reset;
} 