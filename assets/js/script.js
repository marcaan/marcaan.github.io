document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Invia email al destinatario (te)
      emailjs.sendForm('service_ekp9gyk', 'template_fj56rol', this)
        .then(function () {
          alert("Messaggio inviato con successo!");
        }, function (error) {
          alert("Errore: " + JSON.stringify(error));
        });

      // Invia auto-reply all'utente
      emailjs.sendForm('service_ekp9gyk', 'template_imz8fn8', this);
    });
  }
});
