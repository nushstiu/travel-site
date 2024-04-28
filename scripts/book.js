import packagesData from './tours.json' assert {type: 'json'}

//dropdown
// let selectItem = document.getElementById('destination');
// countries.map(item => selectItem.appendChild(new Option(item.name, item.id)).cloneNode(true));

//packages
let selectElement = document.getElementById('destination');

let packagesContainer = document.getElementById('packages');

function displayPackages(country) {
    packagesContainer.innerHTML = '<h1>PACKAGE</h1> </br>';

    let filteredPackages = packagesData.filter(tour => tour.location === country);

    let random = document.createElement('div');
    random.classList.add('random');
    packagesContainer.appendChild(random);

    let packages = document.createElement('div');
    packages.classList.add('packages');
    random.appendChild(packages);

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
        let checkedBlock = document.createElement('div');
        checkedBlock.classList.add('checked-block');
        checkedBlock.innerHTML = `<img src="${tour.fav}" class="check">`;
        let checkedImg = checkedBlock.querySelector('.check');
        let checked = JSON.parse(localStorage.getItem('checked')) || [];
        if (checked.some(item => item.id === tour.id)) {
            checkedImg.src = '../img/checked.png';
        } else {
            checkedImg.src = tour.fav;
        }
        let selected = checked.some(item => item.id === tour.id);
        location.addEventListener('click', () => {
            if (selected) {
                checkedImg.src = tour.fav;
                checked = checked.filter(item => item.id !== tour.id);
            } else {
                checkedImg.src = '../img/checked.png';
                checked.push({ id: tour.id });
            }
            selected = !selected;
            localStorage.setItem('checked', JSON.stringify(checked));
        });

        location.appendChild(checkedBlock);
        location.appendChild(content);
        packages.appendChild(location);

    });
    let booking = document.createElement('div');
    booking.classList.add('booking');


    let terms = document.createElement('div');
    terms.classList.add('terms');
    terms.innerHTML = `
    <div class=t>
    <input type="checkbox" id="terms">
    <label for="terms">Get me a <a href="#">travel insurance</a> that covers my whole trip safety and cancellation. </label>
    </div>    
    <input type="checkbox" id="terms">
        <label for="terms">I have read all <a href="#">terms and conditions</a> and <a href="#">privacy policy</a .</label>
    
    `;

    let bookBtn = document.createElement('button');
    bookBtn.classList.add('book_now');
    bookBtn.innerHTML = `<a href="book.html">Book now</a>`;

    booking.appendChild(terms);
    random.appendChild(booking);
    booking.appendChild(bookBtn);
}

let selectItem = [...new Set(packagesData.map(tour => tour.location))];
selectItem.forEach(location => {
    selectElement.appendChild(new Option(location, location));
});

selectElement.addEventListener('change', function () {
    let selectedCountry = this.value;
    if (selectedCountry !== '') {
        displayPackages(selectedCountry);
    }
});
