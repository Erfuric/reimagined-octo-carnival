//  Login form handler.
async function loginFormHandler(event) {
    event.preventDefault();

    console.log('login handler function engaged');

    // Get information entered in login form.
    const name = document.querySelector('#name').value.trim();
    const password = document.querySelector('#password').value.trim();

    console.log(name)

    // Upon entering login details.
    if (name && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                name,
                password
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response.ok)
        // Response to fetch received, status checked and applicable message displayed. 
        if (response.ok) {
            alert('Welcome to MixMate!');
            document.location.replace('/');

        } else {
            alert('Failed to log in, please try again!');
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);