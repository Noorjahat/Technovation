window.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("registerForm");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzQ9TQ6jdeAyd-NwwuGMJdRNzQdE-nbPyhP9bOfHslAVtgMc12sv6FmaD2_vrz6CMIlYA/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formData
        }
      );

      // Always treat as success because no-cors cannot return status
      showSuccessModal();
      form.reset();

    } catch (err) {
      console.error("Error:", err);
      showErrorModal();
    }
  });

});


function showSuccessModal() {
  document.getElementById("successModal").style.display = "flex";
}

function showErrorModal() {
  document.getElementById("errorModal").style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
