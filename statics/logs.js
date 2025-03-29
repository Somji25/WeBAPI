window.onload = function() {

    const allLogs = JSON.parse(localStorage.getItem('allLogs')) || [];


    allLogs.reverse();  


    const logsToDisplay = allLogs.slice(0, 25); 


    if (logsToDisplay.length > 0) {
        const tableBody = document.querySelector('#logTable tbody');
        

        logsToDisplay.forEach((log, index) => {

            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${index + 1}</td>  <!-- แสดงลำดับ (index + 1) -->
                <td>${log.timestamp ? new Date(log.timestamp).toISOString() : 'N/A'}</td>  <!-- แสดงเวลาจาก log -->
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
        noDataRow.innerHTML = '<td colspan="6">No logs available</td>';
        tableBody.appendChild(noDataRow);
    }


    if (allLogs.length > 25) {

        document.getElementById('nextPageButton').style.display = 'inline-block';

        document.getElementById('nextPageButton').addEventListener('click', function() {

            const remainingLogs = allLogs.slice(25);

            sessionStorage.setItem('remainingLogs', JSON.stringify(remainingLogs));

            window.location.href = 'NextPage.html';
        });
    }
};
