//getting references to all the important elements on the page
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const body = document.querySelector('html');

//adding event listeners for running a function whenever a slider value changes
redSlider.addEventListener('input', changeBackgroundColor);
greenSlider.addEventListener('input', changeBackgroundColor);
blueSlider.addEventListener('input', changeBackgroundColor);
