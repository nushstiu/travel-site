import destinations from './destinations.json' assert {type: 'json'};

let destinationContainer = document.querySelector('.destination');

//elementele 
function createBook(destination) {
    let book = document.createElement('div');
    book.classList.add('book');

    let content = document.createElement('div');
    content.classList.add('book_content');

    let title = document.createElement('h1');
    title.textContent = destination.name;

    let span = document.createElement('span');
    span.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${destination.packages} packages | <i class="fa-solid fa-dollar-sign"></i> ${destination.priceRange}`;

    let description = document.createElement('h4');
    description.textContent = destination.description;

    content.appendChild(title);
    content.appendChild(span);
    content.appendChild(description);
    book.appendChild(content);

    let button = document.createElement('button');
    button.classList.add('book_button');
    button.textContent = 'View Details';
    button.addEventListener('click', () => {
        redirect(destination.name);
    });
    book.appendChild(button);

    let name = document.createElement('h1');
    name.classList.add('country_name');
    name.textContent = destination.name;
    book.appendChild(name);

    let span2 = document.createElement('span');
    span2.classList.add('country_span');
    span2.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${destination.packages} packages | <i class="fa-solid fa-dollar-sign"></i> ${destination.priceRange}`;
    book.appendChild(span2);

    let description2 = document.createElement('h4');
    description2.classList.add('country_description');
    description2.textContent = destination.description;
    book.appendChild(description2);

    switch (destination.name) {
        case 'Indonesia':
            book.classList.add('book1');
            break;
        case 'Japan':
            book.classList.add('book2');
            break;
        case 'Thailand':
            book.classList.add('book3');
            break;
        case 'South Korea':
            book.classList.add('book4');
            break;
        case 'China':
            book.classList.add('book5');
            break;
        case 'Philippines':
            book.classList.add('book6');
            break;
    }

    book.addEventListener('mouseenter', () => {
        content.style.display = 'none';
    });

    book.addEventListener('mouseleave', () => {
        content.style.display = 'block';
    });

    return book;
}

function redirect(countryName) {
    switch (countryName) {
        case 'Indonesia':
            window.location.href = 'indonesia.html';
            break;
        case 'Japan':
            window.location.href = 'japan.html';
            break;
        case 'Thailand':
            window.location.href = 'thailand.html';
            break;
        case 'South Korea':
            window.location.href = 'korea.html';
            break;
        case 'China':
            window.location.href = 'china.html';
            break;
        case 'Philippines':
            window.location.href = 'philippines.html';
            break;
        default:
            window.location.href = 'index.html';
            break;
    }
}
destinations.forEach(destination => {
    let book = createBook(destination);
    destinationContainer.appendChild(book);
});

//search
function filterProducts(text) {
    let bookList = document.querySelectorAll('.book');
    console.log(bookList);

    bookList.forEach(book => {
        let bookText = book.textContent.toLowerCase();
        if (bookText.includes(text.toLowerCase())) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}
filterProducts('');
let searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
    filterProducts(this.value);
});