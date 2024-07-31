const interactive = () => {
  const nextButtons = document.querySelectorAll(".next");
  const prevButtons = document.querySelectorAll(".previous");
  const fieldsets = document.querySelectorAll("fieldset");
  const progressbar = document.querySelectorAll("#progressbar li");

  let currentStep = 0;

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let allFilled = true;
      let passwordsMatch = true;
      const currentFieldset = fieldsets[currentStep];
      const inputs = currentFieldset.querySelectorAll(
        "input[required], select[required]"
      );

      // check for each input
      inputs.forEach((input) => {
        if (!input.value) {
          allFilled = false;
          input.classList.add("input_error")
        }else{
         allFilled = true;
         input.classList.remove("input_error");

        }
      });

      // check for password match
      const password = currentFieldset.querySelector('input[name="password"]');
      const confirmPassword = currentFieldset.querySelector(
        'input[name="conpassword"]'
      );


      if (password?.value && confirmPassword?.value) {
        if (password.value !== confirmPassword.value) {
          passwordsMatch = false;

          password.classList.add("input_error");
          confirmPassword.classList.add("input_error");
          showMessage("Passwords do not match.");
        } else {
          passwordsMatch = true;
          password.classList.remove("input_error");
          confirmPassword.classList.remove("input_error");
        }
      }

      if (allFilled && passwordsMatch) {
        if (currentStep < fieldsets.length - 1) {
          fieldsets[currentStep].style.display = "none";
          currentStep++;
          fieldsets[currentStep].style.display = "block";
          updateProgressBar(currentStep);
        }
      } else if (!allFilled) {
        showMessage("Please fill out all required fields.");
      }
    });
  });

  prevButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (currentStep > 0) {
        fieldsets[currentStep].style.display = "none";
        currentStep--;
        fieldsets[currentStep].style.display = "block";
        updateProgressBar();
      }
    });
  });

  function updateProgressBar() {
    progressbar.forEach((li, index) => {
      li.classList.remove("active_link");
      if (index <= currentStep) {
        li.classList.add("active_link");
      }
    });
  }
  function showMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.className = "alert";
    messageElement.textContent = message;
    document.body.prepend(messageElement);

    setTimeout(() => {
      messageElement.remove();
    }, 3000);
  }
};

export default interactive;
