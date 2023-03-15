const submitButton = document.getElementById('submit-button');



function loginFunction (event) {
    event.preventDefault();

    console.log('login function executed');

    const user = document.querySelector('#user-login');
    const password = document.querySelector('#password-login');

    console.log(user.value);
    console.log(password.value);

}


submitButton.addEventListener('click', loginFunction)




                // //  Login form handler.
                // async function loginFormHandler(event) {
                //     event.preventDefault();

                //     console.log('login handler function engaged');

                //     // Get information entered in login form.
                //     const user = document.querySelector('#user-login').value.trim();
                //     const password = document.querySelector('#password-login').value.trim();

                //     // Upon entering login details.
                //     if (password) {
                //         const response = await fetch('/api/users/login', {
                //             method: 'POST',
                //             body: JSON.stringify({
                //                 password
                //             }),
                //             headers: { 'Content-Type': 'application/json' },
                //         });

                //         // Response to fetch received, status checked and applicable message displayed. 
                //         if (response.ok) {
                //             document.location.replace('/');
                //             alert('Welcome to MixMate!');
                //         } else {
                //             alert('Failed to log in, please try again!');
                //         }
                //     }
                // };



