// Select elements
let dark = document.querySelector('#dark');
let light = document.querySelector('#light');
let header = document.querySelector('header');

let span = document.querySelector('themeContent');
let root = document.querySelector(':root');


dark.addEventListener('click', () => {
    root.style.setProperty('--light', '#003049');
    root.style.setProperty('--dark', '#fff');
    root.style.setProperty('--grey', '#001622');
    dark.style.display = 'none';
    light.style.display = 'inherit';
})

light.addEventListener('click', () => {
    root.style.setProperty('--light', '#fff');
    root.style.setProperty('--dark', '#003049');
    root.style.setProperty('--grey', '#c3c3c3');
    dark.style.display = 'inherit';
    light.style.display = 'none';
})