document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const notifyBtn = document.getElementById('notifyBtn');
    const error = document.querySelector('.error')

    function validateEmail(email) {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    }

    function clearError() {
        input.classList.remove('invalid');
        input.innerHTML = ''
        error.classList.add('hidden');
    }

    input.addEventListener('focus', clearError);

    notifyBtn.addEventListener('click', function () {
        const email = input.value;

        if (validateEmail(email)) {
            // Valid email address
            input.classList.remove('invalid');
            console.log("valid")
        } else {
            // Invalid email address
            input.classList.add('invalid');
            error.classList.remove('hidden')
            console.log("invalid")
            input.appendChild('p')
        }
    });
});
