const cards = {

    card_1: {
        id: 1,
        img: "../img/icons/lab.png",
        title: "Фирменный дизайн",
        description: "Благодарим вас за проявленный интерес к нашей компании и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в холодильник на Хэллоуин, фанаты."
    },
    card_2: {
        id: 2,
        img: "../img/icons/lab.png",
        title: "Фирменный дизайн",
        description: "Благодарим вас за проявленный интерес к нашей компании и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в холодильник на Хэллоуин, фанаты."
    },
    card_3: {
        id: 3,
        img: "../img/icons/lab.png",
        title: "Фирменный дизайн",
        description: "Благодарим вас за проявленный интерес к нашей компании и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в холодильник на Хэллоуин, фанаты."
    },
    card_4: {
        id: 4,
        img: "../img/icons/lab.png",
        title: "Фирменный дизайн",
        description: "Благодарим вас за проявленный интерес к нашей компании и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в холодильник на Хэллоуин, фанаты."
    },
    card_5: {
        id: 5,
        img: "../img/icons/lab.png",
        title: "Фирменный дизайн",
        description: "Благодарим вас за проявленный интерес к нашей компании и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в холодильник на Хэллоуин, фанаты."
    },
    card_6: {
        id: 6,
        img: "../img/icons/lab.png",
        title: "Фирменный дизайн",
        description: "Благодарим вас за проявленный интерес к нашей компании и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в холодильник на Хэллоуин, фанаты."
    },
    card_7: {
        id: 7,
        img: "../img/icons/lab.png",
        title: "Фирменный дизайн",
        description: "Благодарим вас за проявленный интерес к нашей компании и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в холодильник на Хэллоуин, фанаты."
    },
    card_8: {
        id: 8,
        img: "../img/icons/lab.png",
        title: "Фирменный дизайн",
        description: "Благодарим вас за проявленный интерес к нашей компании и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в холодильник на Хэллоуин, фанаты."
    },
}

function createCard(cards) {
    return `
        <div class="service__card">
                    <img src="${cards.img}" alt="Лабораторный Флакон" class="service__flacon-img">
                    <div class="service__comment">
                        <h2 class="service__card-title">${cards.title}</h2>
                        <p class="service__card-description">${cards.description}</p>
                    </div>
                </div>
    `;
}

function renderCards(cards) {
    const cardContainer = document.querySelector(".service__card-container");

    cardContainer.innerHTML = '';

    const arrayCard = Object.values(cards);

    arrayCard.forEach(element => {
        const card = createCard(element);
        cardContainer.insertAdjacentHTML('beforeend', card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        document.body.style.overflow = '';
        preloader.innerHTML = '';
        preloader.style.display = 'none';
    }, 100);

});



document.addEventListener("DOMContentLoaded", function () {


    const modal = document.querySelector('.form__modal');
    const cancelButton = document.querySelector('.form__content-button-input-cancellation');
    const buttonOpenModal = document.querySelector('.header__nav-button');

    function openModal() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        modal.reset();
    }

    buttonOpenModal.addEventListener('click', openModal);

    cancelButton.addEventListener('click', closeModal);

    modal.addEventListener('click', function (event) {

        if (event.target === modal) {
            closeModal();
        }
    });

    modal.addEventListener('submit', function (event) {
        event.preventDefault();
        closeModal();

    });

    renderCards(cards)

});

