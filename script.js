// =======================
// Carrusel Automático
// =======================
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

function changeSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });
  
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

// Cambia automáticamente cada 4 segundos
if (slides.length > 0 && dots.length > 0) {
  setInterval(changeSlide, 4000);

  // Permitir cambiar manualmente con los puntos
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      slides.forEach((s, j) => {
        s.classList.remove('active');
        dots[j].classList.remove('active');
      });
      slides[i].classList.add('active');
      dot.classList.add('active');
      index = i;
    });
  });
}






// =======================
// Tabs (About / How it Works / Why Us)
// =======================
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

if (tabs.length > 0 && contents.length > 0) {
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });
}


const questions = document.querySelectorAll('.faq-question');

  questions.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('active');
    });
  });


  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });