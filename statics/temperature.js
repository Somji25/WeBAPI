
document.getElementById("temperatureForm").addEventListener("submit", function(event) {
    event.preventDefault();  

    const temperature = document.getElementById("temperature").value;


    if (isNaN(temperature) || temperature === '') {
        document.getElementById("message").innerHTML = `<p>Please enter a valid temperature!</p>`;
        return;
    }


    const droneId = localStorage.getItem('droneId');
    const droneName = localStorage.getItem('droneName');
    const country = localStorage.getItem('country');


    if (!droneId || !droneName || !country) {
        document.getElementById("message").innerHTML = `<p>Missing drone data in localStorage!</p>`;
        return;
    }


    const data = {
        drone_id: droneId,
        drone_name: droneName,
        country: country,
        celsius: parseFloat(temperature),
        timestamp: new Date().toISOString(), 
    };


    let allLogs = JSON.parse(localStorage.getItem('allLogs')) || [];


    allLogs.push(data);


    localStorage.setItem('allLogs', JSON.stringify(allLogs));


    fetch('http://127.0.0.1:3000/logs', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { 
                throw new Error('Failed to submit temperature log: ' + text);
            });
        }
        return response.json();
    })
    .then(result => {

        document.getElementById("message").innerHTML = `<p>Temperature log submitted successfully!</p>`;
        document.getElementById("temperatureForm").reset();  
    })
    .catch(error => {
 
        document.getElementById("message").innerHTML = `<p>Error: ${error.message}</p>`;
    });
});
