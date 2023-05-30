function showAndHidePassword(parentInput, inputEl, eyeIcon) {
  $(document).ready(function () {
    $(parentInput).click(function () {
      // Find the password input field
      let passwordInput = $(this).prev('input[type="password"]');
      let input = $(inputEl);
      let eyeEl = $(eyeIcon);

      // Toggle the type attribute of the password input
      if (passwordInput.attr("type") === "password") {
        input.attr("type", "text");
        eyeEl.removeClass("fa-eye-slash").addClass("fa-eye");
      } else {
        input.attr("type", "password");
        eyeEl.removeClass("fa-eye").addClass("fa-eye-slash");
      }
    });
  });
}
showAndHidePassword(".toggle-password", ".newPasswordInput", "#newPassword");
showAndHidePassword(".toggle-password2", ".confirmPasswordInput", "#confirmPassword");
