//page color changer js for changing bg by moving red,green,blue sliders

//waiting until the page is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

//grabbing all sliders and page bg
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const body = document.querySelector('html');

//adding event listeners for slider movement to run changeBackgroundColor function
redSlider.addEventListener('input', changeBackgroundColor);
greenSlider.addEventListener('input', changeBackgroundColor);
blueSlider.addEventListener('input', changeBackgroundColor);

//function for updating the background color based on slider values
function changeBackgroundColor() {
    //getting the current values from each slider
    const red = redSlider.value;  //red value from slider
    const green = greenSlider.value;  //green value from slider
    const blue = blueSlider.value;    //blue value from slider

    //creating an RGB color string from those values
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    //actually changing the background color of the page
    body.style.backgroundColor = rgbColor;

    //logging the color to the console for testing
    console.log("New background color:", rgbColor);
}
});
//tested and made sure that it works!!