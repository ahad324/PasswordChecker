const passwordInp = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirements-list li");

const requirements = [
    { regex: /.{8,}/, index: 0 }, //Minimum of 8 Characters
    { regex: /[0-9]/, index: 1 }, //At least 1 Number
    { regex: /[a-z]/, index: 2 }, //At least 1 lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, //At least 1 Special character
    { regex: /[A-Z]/, index: 4 }, //At least 1 uppercase letter
]

passwordInp.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        //Updating Icon of requirement item if matched or not
        if (isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add("valid");
        } else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove("valid");
        }
    });
});


eyeIcon.addEventListener('click', () => {
    passwordInp.type = passwordInp.type === "password" ? "text" : "password";

    eyeIcon.className = `fa-solid fa-eye${passwordInp.type === "password" ? "" : "-slash"}`;
})