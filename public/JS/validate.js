function validateForm(isAJAX) {
    var username = document.getElementById("username").value;
    var gender = document.getElementById("gender").value;
    var newsletter = document.getElementById("newsletter").checked;

    var regex = /^[a-zA-Z]+$/; // Regular expression to match only text

    if (!username.match(regex)) {
        if (!isAJAX) {
            alert("Please enter a valid username with no numbers.");
        }
        return false;
    }

    if (username === "" || gender === "" || !newsletter) {
        if (!isAJAX) {
            alert("Please fill in all the required fields and check the checkbox.");
        }
        return false;
    }
    
    return true; // Return true if the form is valid
}
