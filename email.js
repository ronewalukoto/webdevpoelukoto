function sendMail(){
        let parms = {
            name: document.getElementById("name").value, 
             email: document.getElementById("email").value, 
              subject: document.getElementById("subject").value, 
               message: document.getElementById("message").value, 
        }
            emailjs.send("service_kf6wreu","template_jdsy57k",parms).then(alert("Email Sent!!"))
    }




