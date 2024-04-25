import packages from './tours.json' assert {type: 'json'}

let toursContainer = document.querySelector('.tour-container');

function createTours() {
    packages.forEach((tours) => {
        let tour = document.createElement('div');
        tour.classList.add('tours');
        tour.innerHTML = `
            <div class="tour-img">
                <img src="${tours.img}" alt="">
            </div>
            <div class="tour-content">
                <span> <i class="fa-solid fa-location-dot"></i> ${tours.location}</span>
                <h1>${tours.name}</h1>
                <p>${tours.description}</p>
            </div>
        `;
        toursContainer.appendChild(tour);

        let bookBlock = document.createElement('div');
        bookBlock.classList.add('book-block');
        bookBlock.innerHTML = `
        <div>
            <span> <i class="fa-regular fa-clock"></i> ${tours.days} Days</span>
        </div>
        <span> <i class="fa-solid fa-dollar-sign"></i> Start from ${tours.price}</span>
        <div class="btn">
        <button class='book_now'> <a href="book.html">Book now</a></button>
        <button class='learn'>Learn more</button>
        </div>
        `
        tour.appendChild(bookBlock);
    })
}
createTours();

//search
//   function filterProducts(text) {
//     const tourList = document.querySelectorAll('.tours');
  
//     tourList.forEach(tour => {
//       const tourText = tour.innerHTML.toLowerCase();
//       if (tourText.includes(text.toLowerCase())) {
//         tour.style.display = "block";
//       } else {
//         tour.style.display = "none";
//       }
//     });
//   }
//   filterProducts('');
//   let searchInput = document.getElementById('searchInput');
// searchInput.addEventListener('input', function () {
//     filterProducts(this.value);
// });

//responisve navbar
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