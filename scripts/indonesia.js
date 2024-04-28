let bar = document.getElementById('bar');
let close = document.getElementById('close');
let nav = document.getElementById('nav-navigation');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

import packagesData from './tours.json' assert {type: 'json'}
let packagesContainer = document.querySelector('.packages');

function displayPackages() {
    const filteredPackages = packagesData.filter(tour => tour.location === "Indonesia");

    filteredPackages.forEach(tour => {
        let location = document.createElement('div');
        location.classList.add('book');
        location.style.backgroundImage = `url('${tour.img}')`;
        let content = document.createElement('div');
        content.classList.add('book_content');
        content.innerHTML = `
            <h1 class="h1">${tour.name}</h1>
            <span> <i class="fa-solid fa-location-dot"></i> ${tour.location} packages | <i class="fa-solid fa-dollar-sign"></i> Start from ${tour.price}</span>
        `;
        location.appendChild(content);
        packagesContainer.appendChild(location);

    });
}
displayPackages();