"use strict";
// size of the canvas in pixels
const canvasSize = 500;
// slider and slider output elements
const slider = document.querySelector('.slider');
const sliderOutput = document.querySelector('.slider-output');
if (slider != null && sliderOutput != null) {
    // update output number on input
    slider.addEventListener('input', () => {
        sliderOutput.innerText = slider.value;
    });
    // update canvas on actual change
    slider.addEventListener('change', () => {
        generateGrid(Number(slider.value));
    });
}
// generating grid
function generateGrid(gridResolution = 16) {
    const gridAreaElement = document.querySelector('.grid-area');
    if (gridAreaElement != null) {
        gridAreaElement.innerHTML = '';
        gridAreaElement.style.gridTemplateColumns = `repeat(${gridResolution}, max-content)`;
        for (let i = 0; i < gridResolution * gridResolution; i++) {
            const gridElement = document.createElement('div');
            gridElement.className = 'grid-element';
            gridElement.style.width = `${canvasSize / gridResolution}px`;
            gridElement.style.height = `${canvasSize / gridResolution}px`;
            gridAreaElement.appendChild(gridElement);
        }
    }
    // generating event listeners on elements for drawing
    const gridList = Array.from(document.querySelectorAll('.grid-element'));
    for (const element of gridList) {
        element.addEventListener('mouseenter', () => {
            element.className = 'grid-element grid-hover';
        });
    }
}
// clear button
const clearButton = document.querySelector('.clear-button');
if (clearButton != null && slider != null) {
    clearButton.addEventListener('click', () => {
        generateGrid(Number(slider.value));
    });
}
generateGrid();
