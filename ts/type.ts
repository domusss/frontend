
interface Card {
  img: string;
  title: string;
  description: string;
}


fetch('scripts/card.json')
  .then(response => response.json())
  .then((data: Card[]) => {
    renderCards(data);
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных:', error);
  });


function createCard(card: Card): string {
  return `
    <div class="service__card">
      <img src="${card.img}" alt="Лабораторный Флакон" class="service__flacon-img">
      <div class="service__comment">
        <h2 class="service__card-title">${card.title}</h2>
        <p class="service__card-description">${card.description}</p>
      </div>
    </div>
  `;
}

function renderCards(cards: Card[]): void {
  const cardContainer = document.querySelector(".service__card-container");

  cardContainer.innerHTML = '';

  cards.forEach((card: Card) => {
    const cards = createCard(card);
    cardContainer.insertAdjacentHTML('beforeend', cards);
  });
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        const preloader = document.querySelector<HTMLDivElement>('.preloader');
        if (preloader) {
            document.body.style.overflow = '';
            preloader.innerHTML = '';
            preloader.style.display = 'none';
        }
    }, 100);
});


document.addEventListener('DOMContentLoaded', function () {
    const swiperEl = document.querySelector<HTMLDivElement>('.swiper');
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
    const modal = document.querySelector<HTMLDivElement>('.form__modal');
    const cancelButton = document.querySelector<HTMLButtonElement>('.form__content-button-input-cancellation');
    const buttonOpenModal = document.querySelector<HTMLButtonElement>('.header__nav-button');

    function openModal(): void {
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(): void {
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
        modal.addEventListener('click', function (event: Event): void {
            if (event.target === modal) {
                closeModal();
            }
        });

        modal.addEventListener('submit', function (event: SubmitEvent): void {
            event.preventDefault();
            closeModal();
        });
    }
});