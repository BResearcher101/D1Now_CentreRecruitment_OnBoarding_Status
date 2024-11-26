fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const progressBar = document.getElementById('recruitment-progress');
        const progressPercent = (data.recruitment.current / data.recruitment.total) * 100;
        progressBar.style.width = progressPercent + '%';
        progressBar.textContent = progressPercent.toFixed(1) + '%';

        const clinicTableBody = document.getElementById('clinic-table-body');
        data.clinics.forEach(clinic => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${clinic.name}</td><td>${clinic.status}</td>`;
            clinicTableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));
