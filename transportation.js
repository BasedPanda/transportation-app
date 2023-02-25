const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Add click event listeners to tab buttons
tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove active class from all tab buttons and tab contents
    tabButtons.forEach((button) => button.classList.remove('active'));
    tabContents.forEach((content) => content.classList.remove('active'));

    // Add active class to clicked tab button and corresponding tab content
    button.classList.add('active');
    const targetContent = document.querySelector(button.dataset.target);
    targetContent.classList.add('active');
  });
});

const mapForm = document.querySelector('#map-form');
const mapResult = document.querySelector('#map-result');

mapForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const location = mapForm.location.value.trim();
  if (location === '') {
    alert('Please enter a location');
    return;
  }
  const url = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;
  mapResult.innerHTML = `<iframe src="${url}" width="100%" height="400px"></iframe>`;
  mapForm.reset();
});

const directionsForm = document.querySelector('#directions-form');
const directionsResult = document.querySelector('#directions-result');

directionsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const origin = directionsForm.origin.value.trim();
  const destination = directionsForm.destination.value.trim();
  if (origin === '' || destination === '') {
    alert('Please enter an origin and destination');
    return;
  }
  const url = `https://www.google.com/maps/dir/${encodeURIComponent(origin)}/${encodeURIComponent(destination)}`;
  directionsResult.innerHTML = `<a href="${url}" target="_blank">Get Directions</a>`;
  directionsForm.reset();
});

const publicTransportationForm = document.querySelector('#public-transportation-form');
const publicTransportationResult = document.querySelector('#public-transportation-result');

publicTransportationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const location = publicTransportationForm.location.value.trim();
  if (location === '') {
    alert('Please enter a location');
    return;
  }
  const url = `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=transit`;
  publicTransportationResult.innerHTML = `<a href="${url}" target="_blank">Find Public Transportation</a>`;
  publicTransportationForm.reset();
});
