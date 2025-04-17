const grid = {
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    ['Edi', 'edicontoh@gmail.com', '021-888-999'],
    ['Rizal', 'rizal@gmail.com', '(62)819-55567-8904']
  ]
};

// Ambil data dari grid
const columns = grid.columns;
const data = grid.data;

// Buat elemen tabel
const table = document.createElement('table');
table.classList.add('styled-table'); // Tambahkan kelas CSS

// Buat header tabel
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
columns.forEach(column => {
  const th = document.createElement('th');
  th.textContent = column;
  headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

// Buat body tabel
const tbody = document.createElement('tbody');
data.forEach(rowData => {
  const row = document.createElement('tr');
  rowData.forEach(cellData => {
    const td = document.createElement('td');
    td.textContent = cellData;
    row.appendChild(td);
  });
  tbody.appendChild(row);
});
table.appendChild(tbody);

// Tambahkan tabel ke dalam container
document.getElementById('table-container').appendChild(table);