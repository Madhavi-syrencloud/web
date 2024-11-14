// Function to save user data in localStorage and create a downloadable file during signup
function saveUserData(event) {
    event.preventDefault();  // Prevent form submission
    
    // Get values from the signup form
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;

    // Ensure passwords match before proceeding
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Store the user email and password in localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    // Create the user data string to save into the file
    const data = `Email: ${email}\nPassword: ${password}\nConfirm Password: ${confirmPassword}\n`;

    // Create a Blob with the user data
    const blob = new Blob([data], { type: "text/plain" });

    // Create an object URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create an anchor element to simulate the file download
    const a = document.createElement("a");
    a.href = url;
    a.download = "user_data.txt"; // Name of the file to be downloaded
    a.style.display = "none";  // Hide the anchor element

    // Append anchor to the body and trigger a click to download the file
    document.body.appendChild(a);
    a.click();

    // Clean up by removing the anchor and revoking the object URL
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Redirect to Login page after saving the data
    alert("Sign up successful! You can now log in.");
    window.location.href = "index.html"; // Redirect to Login Page
}

// Function to validate login credentials
function loginUser(event) {
    event.preventDefault();  // Prevent form submission

    // Get entered login data
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve stored data from localStorage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    // Validate login credentials
    if (email === storedEmail && password === storedPassword) {
        window.location.href = "welcome.html";  // Redirect to Welcome page if credentials match
    } else {
        alert("Incorrect email or password. Please try again.");
        window.location.href = "Signup.html"; // Redirect to signup page if login fails
    }
}
