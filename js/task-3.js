const input = document.querySelector("#name-input")
const output = document.querySelector("#name-output")

input.addEventListener("input", function(event){
    let value = event.target.value;
    if (value === "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = value;
    }
})