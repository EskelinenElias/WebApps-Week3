document.getElementById('userForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  // Send POST request
  const response = await fetch('/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  });
  // Parse result
  const result = await response.json();
  // document.getElementById('responseMessage').textContent = result.message;
});

// Display registered users when "Get Users" -button is clicled
document.getElementById('getUsers').addEventListener('click', async () => {
  const response = await fetch('/users', { method: 'GET' });
  // Check response status
  if (response.status !== 201) {
    console.error("Failed to fetch user data");
    return;
  }
  // Parse response JSON
  const data = await response.json(); 
  // Check that the data is intact
  if (!data || !data.users) {
    console.error("Failed to parse user data");
    return;
  }
  // Get user data
  const users = data.users;
  // Get the userList element and clear previous content
  const userList = document.getElementById('userList');
  userList.innerHTML = '';
  // Add each user to the list
  users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = `${user.name} – ${user.email}`;
    userList.appendChild(listItem);
  });
});
