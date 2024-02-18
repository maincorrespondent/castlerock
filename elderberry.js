// Function to update the countdown display
    function updateCountdown() {
        // Retrieve the remaining time from localStorage
        var countdownTime = localStorage.getItem('countdownTime');

        // If no remaining time is found, set the initial countdown time
        if (!countdownTime) {
            countdownTime = 2 * 60; // 2 minutes in seconds

            // Set initial content of countdown div
            var countdownDiv = document.getElementById('countdown');
            countdownDiv.textContent = Math.floor(countdownTime / 60) + ":00"; // Initial content as minutes:seconds
        } else {
            // Convert countdownTime to a number
            countdownTime = parseInt(countdownTime);
        }

        // Change text color to very deep red and make it blink when countdownTime is 30 seconds or less
        if (countdownTime <= 30) {
            var countdownDiv = document.getElementById('countdown');
            countdownDiv.style.color = countdownDiv.style.color === 'red' ? 'black' : 'red'; // Toggle between red and black

            // Add "Submit now" text when countdownTime is 30 seconds or less
            countdownDiv.textContent += " Submit now";
        }

        countdownTime--;
        var minutes = Math.floor(countdownTime / 60);
        var seconds = countdownTime - (minutes * 60);

        // Update the countdown div with the new time
        var countdownDiv = document.getElementById('countdown');
        countdownDiv.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        // If the countdown reaches zero, redirect to another webpage
        if (countdownTime <= 0) {
            window.location.href = 'https://example.com/timeout';
        }

        // Store the remaining time in localStorage
        localStorage.setItem('countdownTime', countdownTime);
    }

    // Set an interval to update the countdown every second
    setInterval(updateCountdown, 1000);
