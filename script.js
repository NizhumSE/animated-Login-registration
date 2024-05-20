document.getElementById('showRegisterForm').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
});

document.getElementById('showLoginForm').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});

function togglePasswordVisibility(id) {
    var input = document.getElementById(id);
    var showPassword = input.nextElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        showPassword.textContent = 'Hide';
    } else {
        input.type = 'password';
        showPassword.textContent = 'Show';
    }
}

document.querySelector('#loginForm button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Show the loader
    document.getElementById('loaderOverlay').style.display = 'flex';

    // Hide the loader after 8 seconds
    setTimeout(function() {
        document.getElementById('loaderOverlay').style.display = 'none';
        alert('Logged in successfully!'); // Example action after
        alert('Logged in successfully!'); // Example action after loading
        // Optionally, you can redirect the user or perform any other action here
    }, 8000); // 8000 milliseconds = 8 seconds
});