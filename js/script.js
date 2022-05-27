const header = document.querySelector("header");
window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");


menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
}

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
}

const sr = ScrollReveal({
  distance: "45px",
  duration: 2700,
  reset: true
});

sr.reveal(".home-text", {
  delay: 350,
  origin: "left"
});
sr.reveal(".home-img", {
  delay: 350,
  origin: "right"
});

sr.reveal(".sub-service,.about,.portfolio,.service,.cta,.contact", {
  delay: 200,
  origin: "bottom"
});


function openPopup() {
  let popup = document.querySelector(".popup-section");
  popup.classList.toggle("open-popup");
}

function closePopup() {
  let popup = document.querySelector(".popup-section");
  popup.classList.remove("open-popup");
}

function downloadEbook() {
  const scriptURL = "https://script.google.com/macros/s/AKfycbwDPaFWqQscohwLdf0TUO_TSX1D7mA5E28QiVwCzKAwGxud5SDJQlDUovj_HfBib5fv0w/exec";
  const form = document.forms["popupForm"];

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => alert('eBook sent in your mail!', response))
      .catch(error => console.error('Something Error', error.message))
  });
  closePopup();
}

function contactForm() {
  const scriptURL = "https://script.google.com/macros/s/AKfycbwDPaFWqQscohwLdf0TUO_TSX1D7mA5E28QiVwCzKAwGxud5SDJQlDUovj_HfBib5fv0w/exec";
  const form = document.forms["contactForm"];

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => alert('Your Message Sent!', response))
      .catch(error => console.error('Something Error', error.message))
  });
}
