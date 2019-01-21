function createDiv(type) {
    let div = document.createElement('div');

    // Set a random location to spawn the object
    let rndm_x = Math.floor(Math.random() * (screen.width / 2)) + 128;
    let rndm_y = Math.floor(Math.random() * (screen.height / 2));
    div.style.transform = `translate(${rndm_x}px, ${rndm_y}px)`;

    div.setAttribute('data-x', rndm_x);
    div.setAttribute('data-y', rndm_y);
    document.getElementById('main').appendChild(div);
    div.className = 'draggable';
    drawObject(div, type, oscCounter, lfoCounter, bpfCounter);
}
