window.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("registerForm");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwy1n3AXq7WwVXPIILIgroV0AoD4koDl5u1wRlKB1s0gfq8DlA6i5Pb2CybH6ZBd_PttQ/exec",
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
