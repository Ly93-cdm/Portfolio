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
