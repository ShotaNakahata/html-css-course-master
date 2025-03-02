///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
const myname = "NAKAHATA"
const h1 = document.querySelector(".heading-primary")
// h1.addEventListener("click", () => {
//   if (h1.style.backgroundColor === "red") {
//     h1.textContent = "A healthy meal delivered to your door, every single day"
//     h1.style.backgroundColor = null
//     h1.style.padding = 0
//   } else {
//     h1.textContent = myname
//     h1.style.backgroundColor = "red"
//     h1.style.padding = "5rem"
//   }
// })
let year = document.querySelector(".year")
const currentYear = new Date().getFullYear()
year.textContent = currentYear
// const closeEl = document.getElementsByName("close-outline")[0]
// const menuEl = document.getElementsByName("menu-outline")[0]
// const header = document.querySelector(".header")
// // nav-open
// menuEl.addEventListener("click", () => {
//   menuEl.style.display = "none"
//   closeEl.style.display = "block"
//   header.classList.add("nav-open")
// })
// closeEl.addEventListener("click",()=>{
//   menuEl.style.display = "block"
//   closeEl.style.display = "none"
//   header.classList.remove("nav-open")
// })
const header = document.querySelector(".header")
const btnEl = document.querySelector(".btn-mobile-nav")
btnEl.addEventListener("click", () => {
  header.classList.toggle("nav-open")
})

const allLinks = document.querySelectorAll("a:link")
allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const href = link.getAttribute("href")
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    } else if ((href !== "#" && href.startsWith("#"))) {
      const hrefEl = document.querySelector(href);
      hrefEl.scrollIntoView({ behavior: "smooth" })
    }

    if(link.classList.contains("main-nav-link")){
      console.log("have main-nav-link")
      header.classList.toggle("nav-open")
    }
  })
})

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
