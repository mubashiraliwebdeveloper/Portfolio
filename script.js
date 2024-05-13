// ==============================scroll sections active link==============================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
};

var tl = gsap.timeline()

tl.from(".nav-logo",{
        y: -20,
        opacity:0,
        duration:1,
        delay:0.5
})

tl.from(".nav-menu ul li",{
        y: -20,
        opacity:0,
        duration:1,
        stagger: 0.3
})

