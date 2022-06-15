import './style.css';
import Arrow from './arrow.svg';
import Bridge from './bridge.jpg';
import Hills from './hills.jpg';
import Lake from './lake.jpg';
import Lavender from './lavender.jpg';
import Sea from './sea.jpg';

const imgArray = [];
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const mainSlide = document.getElementById('slide');
const dots = document.getElementById('dots');
let timeOut;

const leftArrowImage = document.createElement('img');
const rightArrowImage = document.createElement('img');
leftArrowImage.src = Arrow;
rightArrowImage.src = Arrow;
arrowRight.appendChild(leftArrowImage);
arrowLeft.appendChild(rightArrowImage);

const image0 = document.createElement('img');
image0.src = Bridge;
imgArray.push(image0);
image0.classList.add('image');

const image1 = document.createElement('img');
image1.src = Hills;
imgArray.push(image1);
image1.classList.add('image');

const image2 = document.createElement('img');
image2.src = Lake;
imgArray.push(image2);
image2.classList.add('image');

const image3 = document.createElement('img');
image3.src = Lavender;
imgArray.push(image3);
image3.classList.add('image');

const image4 = document.createElement('img');
image4.src = Sea;
imgArray.push(image4);
image4.classList.add('image');

mainSlide.appendChild(image2);
let currentImage = image2;
let currentIndex = imgArray.indexOf(currentImage);

const createCheckboxes = () => {
  for (let i = 0; i < imgArray.length; i++) {
    const checkbox = document.createElement('input');
    checkbox.type = 'radio';
    checkbox.classList.add('checkbox');
    checkbox.name = 'image';
    if (i == currentIndex) {
      checkbox.checked = true;
    }
    dots.appendChild(checkbox);
  }
};

const updateCurrentImage = (index) => {
  currentImage = imgArray[index];
  mainSlide.textContent = '';
  mainSlide.appendChild(currentImage);
  currentIndex = index;
};

createCheckboxes();

const checkboxes = document.getElementsByClassName('checkbox');
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('click', () => updateCurrentImage(i));
}

const moveSliderRight = () => {
  clearTimeout(timeOut);
  if (currentIndex !== imgArray.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCurrentImage(currentIndex);
  updateCheckbox(currentIndex);
  timeOut = setTimeout(moveSliderRight, 5000);
};

const moveSliderLeft = () => {
  clearTimeout(timeOut);
  if (currentIndex !== 0) {
    currentIndex--;
  } else {
    currentIndex = imgArray.length - 1;
  }
  updateCurrentImage(currentIndex);
  updateCheckbox(currentIndex);
  timeOut = setTimeout(moveSliderRight, 5000);
};

const updateCheckbox = (index) => {
  const checkbox = checkboxes[index];
  checkbox.checked = true;
};

arrowRight.addEventListener('click', moveSliderRight);
arrowLeft.addEventListener('click', moveSliderLeft);
timeOut = setTimeout(moveSliderRight, 5000);
