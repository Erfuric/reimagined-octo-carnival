const logout = async () => {
  const response = await fetch('/logout', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(data.message);
  }
};

document.querySelector('#logout').addEventListener('click', logout);