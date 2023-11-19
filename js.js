const container = document.getElementById("container");
const colors = [
    '#DFFF00', '#6495ED', '#FF00FF', '#0000FF', '#00FF00',
    '#FF0000', '#CCCCFF', '#40E0D0', '#b1e736', '#FFFFFF'
];
const SQUARES = 500;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');

    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0px 0px 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}