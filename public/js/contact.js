document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const emailField = document.getElementById("email");
  const subjectField = document.getElementById("subject");
  const messageField = document.getElementById("message");
  const errBox = document.getElementById("errBox");

  if (form && submitBtn && errBox) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const userEmail = emailField.value
      const subject = subjectField.value
      const message = messageField.value

      try {
        const res = await fetch("/send-mail", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({userEmail, subject, message})
        })
        const data = await res.json()
        console.log(data);
        
      } catch (error) {
        console.log("error::", error);
      }
      
    });
  }
});
