document.addEventListener("DOMContentLoaded", function () {
  const codeBox = document.getElementById("copyCode");
  const msg = document.getElementById("copyMsg");

  codeBox.addEventListener("click", function () {
    navigator.clipboard.writeText("TAKE20");
    msg.style.display = "block";
    setTimeout(() => { msg.style.display = "none"; }, 1200);
  });
});