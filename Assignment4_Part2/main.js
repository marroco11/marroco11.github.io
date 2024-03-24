const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alts = {
    'pic1.jpg' : 'Closeup eye',
    'pic2.jpg' : 'Wavy Texture',
    'pic3.jpg' : 'Purple White Flowers',
    'pic4.jpg' : 'Egyptian Wall',
    'pic5.jpg' : 'Brown Moth'
}

/* Declaring the alternative text for each image file */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
