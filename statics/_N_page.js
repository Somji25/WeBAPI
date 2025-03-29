
window.onload = function() {

    const remainingLogs = JSON.parse(sessionStorage.getItem('remainingLogs')) || [];

    if (remainingLogs.length > 0) {
        const tableBody = document.querySelector('#logTable tbody');
        

        remainingLogs.forEach(log => {

            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${new Date().toISOString()}</td>  <!-- แสดงเวลาปัจจุบัน -->
                <td>${log.country}</td>
                <td>${log.drone_id}</td>
                <td>${log.drone_name}</td>
                <td>${log.celsius}</td>
            `;
            

            tableBody.appendChild(newRow);
        });
    } else {

        const tableBody = document.querySelector('#logTable tbody');
        const noDataRow = document.createElement('tr');
        noDataRow.innerHTML = '<td colspan="5">No more logs available</td>';
        tableBody.appendChild(noDataRow);
    }

    document.getElementById('backButton').addEventListener('click', function() {

        sessionStorage.removeItem('remainingLogs');

        window.location.href = 'View_Logs.html';
    });
}