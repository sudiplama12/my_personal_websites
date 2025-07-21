///hamburger
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}


function formvalidation() {
    var name = document.getElementById("name").value.trim();
    var contact = document.getElementById("contact").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();

    var name_ko_condition = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
    var contact_ko_condition = /^[0-9]{7,15}$/;  
    var email_ko_condition= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    } else if (!name_ko_condition.test(name)) {
        alert("Name can only contain letters, spaces.");
        return false;
    }

    if (!contact_ko_condition.test(contact)) {
        alert("Please enter a valid contact number (7 to 15 digits).");
        return false;
    }

    if (!email_ko_condition.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (subject === "") {
        alert("Please enter a subject.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    return true; 
}
