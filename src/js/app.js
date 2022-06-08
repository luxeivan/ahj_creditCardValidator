import img from '../img/goblin.png';

const gridElem = document.querySelectorAll('.grid__elem');
const image = document.createElement('img');
let currentNumberElem = 0;
const arrayElem = [...gridElem];
image.className = 'image';
image.src = img;

function generateNumberElem() {
  const min = 0;
  const max = 15;
  const numberElem = Math.floor(Math.random() * (max - min + 1)) + min;
  if (currentNumberElem !== numberElem) {
    currentNumberElem = numberElem;
  } else {
    generateNumberElem();
  }
}

setInterval(() => {
  generateNumberElem();
  arrayElem[currentNumberElem].insertBefore(image, null);
}, 1000);
