// creating a custom reusable header
class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
        <header>
          <nav>
            <h3 id="logo">Rehan</h3>
            <ul class="nav-links">
              <li class="nav-item"><a class="nav-link"  href="#homepage">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="#experiencepage">Experience</a></li>
              <li class="nav-item"><a class="nav-link" href="#aboutpage">About</a></li>
              <li class="nav-item"><a class="nav-link" href="#portfoliopage">Portfolio</a></li>
              <li class="nav-item"><a class="nav-link" href="#contactpage">Contact</a></li>
              <button id="nav-btn-hidden">Let's Talk</button>
            </ul>
            <button id="nav-btn">Let's Talk</button>
            <div class="menu-btn">
              <div class="menu-btn__burger"></div>
            </div>
          </nav>
        </header>
    `
  }
}
// declaring it as an element
customElements.define("my-header", myHeader);








// hamburger 
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


// mobile nav functionality
const togggleIcon = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");
togggleIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// hide mobile nav when a link is clicked
document.querySelector(".nav-link, .nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("active");
  })
);


