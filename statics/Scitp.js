
function getDroneConfig() {
  fetch('http://127.0.0.1:3000/drone-config')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('droneId', data.drone_id);
      localStorage.setItem('droneName', data.drone_name);
      localStorage.setItem('country', data.country);

      document.getElementById('configDetails').innerHTML = `
          <h1>Drone Config</h1>
          <h2>--------------------</h2>
          <h2>---------------------------</h2>
          <h2>------------------------</h2>
          <p><strong>Drone ID:</strong> ${data.drone_id}</p>
          <p><strong>Drone Name:</strong> ${data.drone_name}</p>
          <p><strong>Light:</strong> ${data.light}</p>
          <p><strong>Country:</strong> ${data.country}</p>
          <h2>---------------------------</h2>
          <h2>-------------------------</h2>
          <h2>---------------------------</h2>
          <h2>----------------------</h2>
          <div class="Next_buttom">
            <a href="./Temperature_Log_Form.html">
            <button type="button">Next</button>
            </a>
          </div>
      `;
    })
    .catch(error => console.error('Error fetching config:', error));
}

// Run the function when the page loads
window.onload = function() {
  getDroneConfig();
};