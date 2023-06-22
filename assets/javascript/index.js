
// online & offline
let el = document.createElement('div');
document.getElementById("logotitr").append(el);

window.addEventListener("offline", (event) => {
  el.style.display = 'block';
  el.textContent = "اینترنت شما قطع شد";
  el.className = "alert";
  el.classList.add("alert-danger");
  el.style.backgroundColor = '#f7bdb8';
  setTimeout(() => {
    el.style.display = 'none';
  }, 3000);
});

window.addEventListener("online", (event) => {
  el.style.display = 'block';
  el.textContent = "اینترنت شما وصل شد";
  el.className = "alert";
  el.classList.add("alert-success");
  el.style.backgroundColor = '#b2f6d2';
  setTimeout(() => {
    el.style.display = 'none';
  }, 3000);
});



//accordion
// let accordion1 = document.getElementsByClassName('accordion1');

// Array.from(accordion1.children).forEach(wrapper => {
//   wrapper.getElementsByTagName('span').addEventListener('click', e => {
//     let span = e.target;
//     let wrapper = span.parentElement;
//     wrapper.classList.toggle('show');
//   })
// })
