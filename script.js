// === Floating cursor blob ===
const blob = document.getElementById("blob");
document.body.addEventListener("pointermove", (e) => {
  const { clientX, clientY } = e;
  blob.style.left = `${clientX}px`;
  blob.style.top = `${clientY}px`;
});

// === Scroll reveal (IntersectionObserver) ===
const els = [...document.querySelectorAll("[data-reveal]")];
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("show");
        io.unobserve(en.target);
      }
    });
  },
  { threshold: 0.15 }
);
els.forEach((el) => io.observe(el));

// === Form demo ===
function sendEmail(ev) {
  ev.preventDefault();
  alert("Terima kasih! Pesanmu sudah dicatat. Untuk respon cepat, klik tombol WhatsApp ya ✨");
}

document.querySelectorAll('.slider').forEach(slider => {
  const track = slider.querySelector('.slide-track');
  const count = slider.dataset.count; // jumlah gambar
  let index = 0;
  let interval;

  function startSlide() {
    interval = setInterval(() => {
      index = (index + 1) % count;
      track.style.transform = `translateX(-${index * 100}%)`;
    }, 3000); // ganti slide tiap 3 detik
  }

  function stopSlide() {
    clearInterval(interval);
    track.style.transform = `translateX(0)`; // reset ke gambar pertama
    index = 0;
  }

  slider.addEventListener('mouseenter', startSlide);
  slider.addEventListener('mouseleave', stopSlide);
});
