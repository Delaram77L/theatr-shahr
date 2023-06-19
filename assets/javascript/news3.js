
// online & offline
let el = document.createElement('div');
document.getElementById("logotitr").append(el);


window.addEventListener("offline", (event) => {
    el.textContent = "اینترنت شما قطع شد";
    el.className = "alert";
    el.classList.add("alert-danger");
    el.style.backgroundColor = '#f7bdb8';
  });

window.addEventListener("online", (event) => {
  el.textContent = "اینترنت شما وصل شد";
  el.className = "alert";
  el.classList.add("alert-success");
  el.style.backgroundColor = '#b2f6d2';
  });           


