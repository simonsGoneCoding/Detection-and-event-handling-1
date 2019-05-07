const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX + 1;
    const y = e.clientY + 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    // h1.textContent = ``

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = (red + green) / 2;

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;

})