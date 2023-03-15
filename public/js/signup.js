// Sign up form handler.
async function signupFormHandler(event) {
    event.preventDefault();

    // Get the information from login page.
    const username = document.querySelector('#username-signup').value.trim();
    // const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // Once all three fields are populated.
    // POST new user details to the user table in database.
    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        // Response to fetch received, status checked and applicable message displayed.
        if (response.ok) {
            document.location.replace('/');
            alert('Congratulations you a now a member of MixMate!');
        } else {
            alert('Failed to sign up, please try again');
        }
    }
};

document
    .querySelector('signup-form')
    .addEventListener('submit', signupFormHandler);