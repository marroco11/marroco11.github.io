const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['pic1.jpg', 'pic2.jpg', `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];


/* Declaring the alternative text for each image file */

const altText = {
    'pic1.jpg' : 'Closeup eye',
    'pic2.jpg' : 'Wavy Texture',
    'pic3.jpg' : 'Purple White Flowers',
    'pic4.jpg' : 'Egyptian Wall',
    'pic5.jpg' : 'Brown Moth'
}

/* Looping through images */

for (const image of images) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
newImage.setAttribute('alt', altText[image]);


thumbBar.appendChild(newImage);
newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', newImage.getAttribute('src'));
    displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
   })

}
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  })