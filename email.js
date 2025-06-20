document.getElementById("enquiryForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorBox = document.getElementById("form-messages");
    const errorList = errorBox.querySelector("li");

    let errors = [];

    // Validation checks
    if (!name) errors.push("Full name is required.");
    if (!email || !email.includes("@")) errors.push("Enter a valid email address.");
    if (!service) errors.push("Service field is required.");
    if (!message) errors.push("Message field cannot be empty.");

    if (errors.length > 0) {
      errorBox.style.display = "block";
      errorList.innerHTML = errors.join("<br>");
    } else {
      errorBox.style.display = "none";

      // Submit with AJAX
      fetch("https://formspree.io/f/mdkzlzdw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, message }),
      })
        .then(res => {
          if (res.ok) {
            errorBox.style.display = "block";
            errorBox.style.backgroundColor = "#dcfce7";
            errorBox.style.border = "1px solid green";
            errorBox.style.color = "green";
            errorList.innerHTML = "Your enquiry was sent successfully!";
            document.getElementById("enquiryForm").reset();
          } else {
            throw new Error();
          }
        })
        .catch(() => {
          errorBox.style.display = "block";
          errorBox.style.backgroundColor = "rgb(255, 232, 232)";
          errorBox.style.border = "1px solid red";
          errorBox.style.color = "red";
          errorList.innerHTML = "Failed to send message. Try again later.";
        });
    }
  });
