
function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-btn');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleBtn.textContent = '🙈'; // or use an icon for "hide"
    } else {
        passwordField.type = 'password';
        toggleBtn.textContent = '👁️'; // or use an icon for "show"
    }
}
