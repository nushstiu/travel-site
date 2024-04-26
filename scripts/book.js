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
        let checkedImg = document.createElement('img');
        checkedImg.classList.add('check');
        let checked = JSON.parse(localStorage.getItem('checked')) || [];
        checkedImg.src = checked.some(item => item.id === tour.id) ? '../img/checked.png' : tour.fav;

        checkedImg.addEventListener('click', () => {
            const index = checked.findIndex(item => item.id === tour.id);
            if (index !== -1) {
                checked.splice(index, 1);
            } else {
                checked.push({ id: tour.id });
            }
            localStorage.setItem('checked', JSON.stringify(checked));
            checkedImg.src = checked.some(item => item.id === tour.id) ? '../img/checked.png' : tour.fav;
        });

        checkedBlock.appendChild(checkedImg);
        location.appendChild(checkedBlock);
        location.appendChild(content);
        random.appendChild(location);
    });
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
