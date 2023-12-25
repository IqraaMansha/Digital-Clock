function showTime() {
    // Create a new Date object to get the current date and time
    var date = new Date();
  
    // Extract hours, minutes, and seconds from the date object
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
  
    // Set the default time session to "AM"
    var session = "AM";
  
    // Format the hours to 12-hour format and determine the session (AM/PM)
    hr = (hr === 0) ? 12 : hr; // If hour is 0 (midnight), set it to 12
    if (hr > 12) {
      hr = hr - 12;
      session = "PM";
    }
  
    // Add leading zeros to single-digit minutes and seconds
    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
  
    // Create a formatted time string including hours, minutes, seconds, and session
    var time = hr + ":" + min + ":" + sec + " " + session;
  
    // Get the DOM element with the id 'clock'
    var clock = document.querySelector('#clock');
  
    // Set the text content of the 'clock' element to the formatted time
    clock.innerText = time;
  
    // Schedule the function to be called again after 1000 milliseconds (1 second)
    setTimeout(showTime, 1000);
  }
  
  // Call the showTime function to start displaying the time immediately
  showTime();
  