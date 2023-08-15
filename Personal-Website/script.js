// Function to update the current date
function updateDate() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    document.getElementById('current-date').textContent = formattedDate;
}

// Call the function initially to set the date
updateDate();

// Update the date every second (1000 milliseconds)
setInterval(updateDate, 1000);

