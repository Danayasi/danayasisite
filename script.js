document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    const track = document.getElementById('sliderImages');
    const prev = document.getElementById('sliderPrev');
    const next = document.getElementById('sliderNext');
    const dots = document.getElementById('sliderDots');

    if (!track || !prev || !next || !dots) return;

    const n = track.children.length;
    let i = 0;

    for (let j = 0; j < n; j++) {
      const b = document.createElement('button');
      b.setAttribute('aria-label', `Слайд ${j + 1}`);
      b.onclick = () => { i = j; update(); };
      dots.appendChild(b);
    }
    const btns = dots.querySelectorAll('button');
    update();

    function update() {
      track.style.transform = `translateX(${-i * 33.3333}%)`;
      btns.forEach((b, idx) => b.classList.toggle('active', idx === i));
    }

    prev.onclick = () => { i = Math.max(0, i - 1); update(); };
    next.onclick = () => { i = Math.min(n - 1, i + 1); update(); };
  });
});