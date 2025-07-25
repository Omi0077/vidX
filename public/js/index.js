document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("linkForm");
  const submitBtn = document.getElementById("submitBtn");
  const spinner = document.getElementById("loadingSpinner");
  const errBox = document.getElementById("errBox");
  const inputField = document.getElementById("videoLink");
  const downloadSection = document.getElementById("downloadSection");
  const downloadBtn = document.getElementById("downloadLink");

  // console.log('hello');

  if (form && submitBtn && spinner) {
    form.addEventListener("submit", async (e) => {
      submitBtn.disabled = true;
      spinner.classList.remove("hidden");

      e.preventDefault();

      const videoLink = inputField.value;

      try {
        const res = await fetch("/start", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ videoLink }),
        });
        const data = await res.json();

        if (!res.ok) {
          errBox.textContent = data.errors.join("\n");
          errBox.classList.remove("hidden");
        } else if (data.urlToVideo) {
          downloadBtn.href = `/download?url=${data.urlToVideo}`;
          downloadSection.classList.remove("hidden");
        } else {
          downloadSection.classList.add("hidden");
          errBox.textContent = "Something went wrong. Please try again.";
          errBox.classList.remove("hidden");
        }

        if (inputField && errBox) {
          inputField.addEventListener("input", () => {
            errBox.textContent = "";
            errBox.classList.add("hidden");
          });
        }

        console.log(data);
      } catch (error) {
        console.log("error::", error);
      } finally {
        spinner.classList.add("hidden");
        submitBtn.disabled = false;
      }
    });
  }
});
