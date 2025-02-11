// Step 1: Initialize the Async Function
async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    const dataContainer = document.getElementById('api-data');

    try {
    
        const response = await fetch(apiUrl);
        
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();

        dataContainer.innerHTML = '';

        
        const userList = document.createElement('ul');
        
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; 
            userList.appendChild(listItem); 
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        
        dataContainer.innerHTML = ''; 
        dataContainer.textContent = 'Failed to load user data.'; 
    }
}


document.addEventListener('DOMContentLoaded', fetchUserData);