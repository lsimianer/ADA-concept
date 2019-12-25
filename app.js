// document.onload(alert('this alert is working'));

const adaContainer = () => {
    window.location.href = "#ADALinks";
    preventDefualt();
    stopPropogation();
};

const passwordInput = document.getElementById('passwordInput');
const statusdiv = document.getElementById('passwordStatus');

const passwordController = () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        console.log('input type is :', passwordInput.type)
        statusdiv.innerHTML = "Your password will be read aloud as you enter it"
    }

    if (passwordInput.type === "text") {
        passwordInput.type = "password"
        console.log('input type is :', passwordInput.type)
        statusdiv.innerHTML = "Your password will be obscured by your screen reader for security"
    }
};