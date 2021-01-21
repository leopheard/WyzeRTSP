document.addEventListener("DOMContentLoaded", function() {
  // If there are any error notifications below an input field, focus that field
  var notificationElm = document.querySelector(".notification-error");
  if (
    notificationElm &&
    notificationElm.previousElementSibling &&
    typeof notificationElm.previousElementSibling.focus === "function"
  ) {
    notificationElm.previousElementSibling.focus();
  }
});
