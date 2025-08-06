function createStars(){
    const star = document.createElement('div');
    star.classList.add("star");

    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    star.style.left = x + 'px';
    star.style.top = y + 'px';

    const delay = Math.random() * 5;
    star.style.animationDelay = `${delay}s`;

    return star;
}

function addStars(){
    const numStars = 100;

    const starsContainer = document.querySelector('.stars');

    for(let i = 0; i < numStars; i++){
        const star = createStars();
        starsContainer.appendChild(star);
    }
}

addStars();

  document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      const headerOffset = 50;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; 
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

    // Função de easing para suavizar a animação
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    });
  });

