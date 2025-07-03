fetch('scripts/card.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    renderCards(data);
})
    .catch(function (error) {
    console.error('Ошибка при загрузке данных:', error);
});
function createCard(card) {
    return "\n    <div class=\"service__card\">\n      <img src=\"".concat(card.img, "\" alt=\"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0439 \u0424\u043B\u0430\u043A\u043E\u043D\" class=\"service__flacon-img\">\n      <div class=\"service__comment\">\n        <h2 class=\"service__card-title\">").concat(card.title, "</h2>\n        <p class=\"service__card-description\">").concat(card.description, "</p>\n      </div>\n    </div>\n  ");
}
function renderCards(cards) {
    var cardContainer = document.querySelector(".service__card-container");
    cardContainer.innerHTML = '';
    cards.forEach(function (card) {
        var cards = createCard(card);
        cardContainer.insertAdjacentHTML('beforeend', cards);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
        var preloader = document.querySelector('.preloader');
        if (preloader) {
            document.body.style.overflow = '';
            preloader.innerHTML = '';
            preloader.style.display = 'none';
        }
    }, 1000);
});
document.addEventListener('DOMContentLoaded', function () {
    var swiperEl = document.querySelector('.swiper');
    if (swiperEl && typeof Swiper !== 'undefined') {
        new Swiper('.swiper', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.querySelector('.form__modal');
    var cancelButton = document.querySelector('.form__content-button-input-cancellation');
    var buttonOpenModal = document.querySelector('.header__nav-button');
    function openModal() {
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            if (modal instanceof HTMLFormElement) {
                modal.reset();
            }
        }
    }
    if (buttonOpenModal) {
        buttonOpenModal.addEventListener('click', openModal);
    }
    if (cancelButton) {
        cancelButton.addEventListener('click', closeModal);
    }
    if (modal) {
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
        modal.addEventListener('submit', function (event) {
            event.preventDefault();
            closeModal();
        });
    }
});
