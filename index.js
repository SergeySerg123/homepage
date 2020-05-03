const playBtn = document.querySelector('#meh');

playBtn.addEventListener('click', () => {
    const a = new Audio('./assets/sounds/meh.mp3');
    a.play();
});

document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('#main');
    setTimeout(()=> {main.classList.add('show-main-content')}, 500);
});