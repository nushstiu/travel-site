import countries from './destinations.json' assert {type: 'json'}

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

//datepicker
$(document).ready(function() {
    $('#checkin_date, #checkout_date').focus(function() {
        $(this).siblings('.datepicker').addClass('open');
    });

    $('#checkin_date, #checkout_date').blur(function() {
        $(this).siblings('.datepicker').removeClass('open');
    });

    $('#checkin_datepicker').datepicker({
        onSelect: function(date) {
            $('#checkin_date').val(date); // updates datepicker ul
            $('#checkin_date').blur(); // inchide datepicker ul
        }
    });

    $('#checkout_datepicker').datepicker({
        onSelect: function(date) {
            $('#checkout_date').val(date);
            $('#checkout_date').blur(); 
        }
    });
});

//dropdown
let selectItem = document.getElementById('destination');
countries.map(item => selectItem.appendChild(new Option(item.name, item.id)).cloneNode(true));

//swiper
const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//map reviews
document.addEventListener("DOMContentLoaded", function() {
  let reviewText = document.getElementById("review-text");

  let people = document.querySelectorAll("#person");
  people.forEach(person => {
      person.addEventListener("mouseover", function() {
          let review = this.getAttribute("data-review");
          reviewText.textContent = review;
      });
  });
});

//questions
document.addEventListener("DOMContentLoaded", function() {
  let questions = document.querySelectorAll(".question");

  questions.forEach(question => {
      question.addEventListener("click", function() {
          let container = this.parentElement;
          container.classList.toggle("open");
          let arrowIcon = this.querySelector(".arrow-icon");
          arrowIcon.classList.toggle("rotate");
      });
  });
});
  