// Fetch data from backend
document.getElementById('fetchBtn').addEventListener('click', async () => {
    const responseDiv = document.getElementById('response');
    responseDiv.textContent = 'Loading...';
    responseDiv.className = 'response';
    
    try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        
        responseDiv.textContent = JSON.stringify(data, null, 2);
        responseDiv.className = 'response success';
    } catch (error) {
        responseDiv.textContent = `Error: ${error.message}`;
        responseDiv.className = 'response error';
    }
});

// Handle form submission
document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('nameInput');
    const formResponseDiv = document.getElementById('formResponse');
    const name = nameInput.value.trim();
    
    formResponseDiv.textContent = 'Sending...';
    formResponseDiv.className = 'response';
    
    try {
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        
        const data = await response.json();
        formResponseDiv.textContent = JSON.stringify(data, null, 2);
        formResponseDiv.className = 'response success';
        nameInput.value = '';
    } catch (error) {
        formResponseDiv.textContent = `Error: ${error.message}`;
        formResponseDiv.className = 'response error';
    }
});

