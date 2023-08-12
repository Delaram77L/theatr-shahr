// Clock
setInterval(() =>{
  let d = new Date();
  document.getElementById('date').innerText = d.toLocaleDateString('fa-IR');
}, 1000)



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



//accordion1 ????????????????????????????????????????????????????????

// let accordion1 = document.getElementsByClassName('accordion1');

// Array.from(accordion1.children).forEach(wrapper => {
//   wrapper.getElementsByTagName('span').addEventListener('click', e => {
//     let span = e.target;
//     let wrapper = span.parentElement;
//     wrapper.classList.toggle('show');
//   })
// })



//copy-link
const copyLink = document.getElementById('copy-link');
copyLink.addEventListener('click', ()=>{
  let text = document.getElementById('copy-text');
  navigator.clipboard.writeText(text.innerHTML);
})


//back to top
let scroll = document.querySelector('.scroll');

window.addEventListener('scroll', e =>{
  if(window.scrollY > 600){
    scroll.classList.add('show')
  } else{
    scroll.classList.remove('show')
  }
})