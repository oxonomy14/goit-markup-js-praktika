import { queryPixabay } from './js/pixabay-api';
import { refs } from './js/refs';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let query = ''; // Змінна для збереження пошукового запиту
let page = 1; // Починаємо з першої сторінки
const perPage = 20; // Кількість зображень на сторінку

refs.form.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onBtnClick);

// ---- Пошук при натисканні "Пошук" ----
async function onFormSubmit(evt) {
  evt.preventDefault();

  refs.imageList.innerHTML = ''; // Очищення галереї перед новим пошуком
  page = 1; // Скидаємо номер сторінки

  query = evt.currentTarget.elements.query.value.trim(); // Отримуємо запит з форми

  if (!query) {
    iziToast.error({
      title: 'Помилка',
      message: '❌ Введіть пошукову фразу',
      position: 'topCenter',
      timeout: 2500,
    });
    return;
  }

  try {
    const images = await queryPixabay(query, page);
    renderImages(images);
    toggleLoadMore(images.length); // Перевіряємо, чи є ще картинки для завантаження
  } catch (error) {
    console.error(error);
  }

  refs.form.reset();
}

// ---- Завантаження наступної сторінки ----
async function onBtnClick() {
  page += 1; // Збільшуємо сторінку

  try {
    const images = await queryPixabay(query, page);
    renderImages(images);
    toggleLoadMore(images.length); // Перевіряємо, чи є ще картинки для завантаження
  } catch (error) {
    console.error(error);
  }
}

// ---- Функція рендерингу картинок ----
function renderImages(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}" target="_blank">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
      </li>
    `
    )
    .join('');

  refs.imageList.insertAdjacentHTML('beforeend', markup);
}

// ---- Перевірка, чи потрібно показувати кнопку "Load More" ----
function toggleLoadMore(imageCount) {
  if (imageCount < perPage) {
    refs.btnLoadMore.style.display = 'none'; // Ховаємо кнопку, якщо більше картинок немає
  } else {
    refs.btnLoadMore.style.display = 'block'; // Показуємо кнопку
  }
}
