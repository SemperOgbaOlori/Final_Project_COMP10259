function validateInput() {
    // get all input from the form
    let first = document.getElementById("fname").value;
    let last = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let phone = document.getElementById("phone").value;
    let msg = document.getElementById("message").value;

    console.log(first + " " + last + " " + email + " " + date + " " + phone + " " + msg);

    // Validate the user's input
    // First name should be at least 5 characters.
    if (first.length < 5) {
        alert("First name should be at least 5 characters. ");
        return false;
    }
    // Last name should be at least 5 characters.
    if (last.length < 5) {
        alert("Last name should be at least 5 characters. ");
        return false;
    }
    // Phone must contain 10 digits.
    if (phone.length !== 10) {
        alert("Phone must contain 10 digits.");
        return false;
    }
    // Message must be of at least 50 alphabets.
    if (msg.length < 50) {
        alert("Message must be of at least 50 alphabets. ");
        return false;
    }
    return true;
}