function fetchData(callback) {
    // Buat elemen loading
    const tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = '<tr><td colspan="5" style="text-align: center;">Loading...</td></tr>';

    // Simulasi loading 3 detik
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                return response.json();
            })
            .then(data => callback(null, data))
            .catch(error => {
                console.error('Fetch error:', error);
                callback(error, null);
            });
    }, 3000); 
}

function renderTable(error, users) {
    const tableBody = document.getElementById('userTableBody');

    if (error) {
        console.error(error);
        tableBody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: red;">Failed to load data</td></tr>';
        return;
    }

    tableBody.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.street}, ${user.address.city}</td>
            <td>${user.company.name}</td>
        `;
        tableBody.appendChild(row);
    });
}

fetchData(renderTable);