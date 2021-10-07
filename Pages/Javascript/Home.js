let x = -1;
const directory = 'Formats/Resources/';
const images = ['proj1-1.jpg','proj2-2.jpg','proj3-1.jpg','proj2-1.jpg','proj1-2.jpg','proj3-2.jpg'];

function start() {
    setInterval(displayNext, 2000);
}

function displayNext() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById('rotatingImage').src = (directory + images[x]);
    //alert(document.getElementById('rotatingImage').src = (directory + images[x]));
}