document.addEventListener('DOMContentLoaded', async function() {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');
        
        try {
            // Fetch data from API
            const response = await fetch(apiUrl);
            const users = await response.json();
            
            // Clear loading message
            dataContainer.innerHTML = '';
            
            // Create and populate user list
            const userList = document.createElement('ul');
            
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });
            
            dataContainer.appendChild(userList);
        } catch (error) {
            console.error('Error fetching user data:', error);
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }
    
    fetchUserData();
});