let x = -1;
const directory = 'Formats/Resources/HomePictures/';
const images = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg', 'img6.jpeg'];

function start() {
    setInterval(displayNext, 2000);
}

function displayNext() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById('rotatingImage').src = (directory + images[x]);
}