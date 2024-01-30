(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

const resumePath = "./resume/CV resume.pdf";
// Function to trigger the download
function downloadResume() {
  const link = document.getElementById("download-btn");
  link.href = resumePath;
  link.download = "CV resume.pdf";
  link.click();
}

// event listener
document
  .getElementById("download-btn")
  .addEventListener("click", downloadResume);

document.getElementById("contact-btn").addEventListener("submit", sendEmail);

// contact form
emailjs.init("z7RiNNG-Sqjcam7rU");

function sendEmail() {
  const form = document.getElementById("contact-form");
  const formData = new FormData(form);

  emailjs.sendForm("service_mlsz66x", "template_92jpnwj", formData).then(
    function (response) {
      alert("Email sent successfully!", response);
    },
    function (error) {
      alert("Error sending email. Please try again.", error);
    }
  );
}
