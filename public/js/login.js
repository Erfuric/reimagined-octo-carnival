//  Login form handler.
async function loginFormHandler(event) {
    event.preventDefault();

    console.log('login handler function engaged');

    // Get information entered in login form.
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // Upon entering login details.
    if (password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                password
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        // Response to fetch received, status checked and applicable message displayed. 
        if (response.ok) {
            document.location.replace('/');
            alert('Welcome to MixMate!');
        } else {
            alert('Failed to log in, please try again!');
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);