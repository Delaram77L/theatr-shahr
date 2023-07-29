
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



//copy-link
const copyLink = document.getElementById('copy-link');
copyLink.addEventListener('click', () => {
  let text = document.getElementById('copy-text');
  navigator.clipboard.writeText(text.innerHTML);
})




//userpattern => up ??????????????????????????????????
// let up = /^[a-zA-Z][\w._]{5,14}$/;

// form.name.addEventListener('keyup', e => {
//   if (up.test(e.target.value)) {
//     e.target.classList.add('is-valid');
//     e.target.classList.remove('is-invalid');
//   } else {
//     e.target.classList.add('is-invalid');
//   }
// })



//local storage
const lName = document.getElementById('name');
const username = document.getElementById('username');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const formbox = document.getElementById('form');


formbox.addEventListener('submit', (e) => {
  e.preventDefault();
  const h1 = document.getElementById('h1');

  if (lName.value !== '') {
    h1.innerText = `${lName.value} عزیز ، خوش آمدی`
  }})

submit.addEventListener('click', () => {
  localStorage.setItem('name', JSON.stringify(lName.value));
  localStorage.setItem('username', JSON.stringify(username.value));
})


