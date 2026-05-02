// Wait until the entire HTML page is loaded before running the script
document.addEventListener("DOMContentLoaded", function () {

  // Select the button using its ID
  const themeButton = document.getElementById("themeToggle");

  // Add a click event listener to the button
  themeButton.addEventListener("click", function () {

    // Toggle the "dark-mode" class on the <body>
    // If it's not there, it adds it
    // If it is there, it removes it
    document.body.classList.toggle("dark-mode");

    // Check if dark mode is currently active
    if (document.body.classList.contains("dark-mode")) {

      // If dark mode is ON, change button text
      themeButton.textContent = "Switch to Light Mode";

    } else {

      // If dark mode is OFF, change button text back
      themeButton.textContent = "Switch to Dark Mode";
    }
  });
});