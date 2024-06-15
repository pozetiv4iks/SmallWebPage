const destinations = document.querySelectorAll('.destination1,.destination2,.destination3');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const ellipses = document.querySelectorAll('.ellipse1,.ellipse2,.ellipse3');

let currentDestinationIndex = 0;

function updateEllipses() {
  ellipses.forEach((ellipse, i) => {
    ellipse.classList.toggle('active', i === currentDestinationIndex);
  });
}

function showDestination(index) {
  destinations.forEach((destination, i) => {
    destination.style.transform = `translateX(${i === index? 0 : (i < index? '-100%' : '100%')})`;
  });
  updateEllipses();
}

leftArrow.addEventListener('click', () => {
  currentDestinationIndex = (currentDestinationIndex - 1 + destinations.length) % destinations.length;
  showDestination(currentDestinationIndex);
});

rightArrow.addEventListener('click', () => {
  currentDestinationIndex = (currentDestinationIndex + 1) % destinations.length;
  showDestination(currentDestinationIndex);
});

ellipses.forEach((ellipse, i) => {
  ellipse.addEventListener('click', () => {
    currentDestinationIndex = i;
    showDestination(currentDestinationIndex);
  });
});

showDestination(currentDestinationIndex);