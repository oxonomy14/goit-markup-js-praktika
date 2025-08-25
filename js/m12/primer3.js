import { queryPixabay } from './js/pixabay-api';
import { refs } from './js/refs';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let query = '';
let page = 1;
const perPage = 20;

refs.form.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onBtnClick);

async function onFormSubmit(evt) {
  evt.preventDefault();

  refs.imageList.innerHTML = ''; // Очищуємо галерею перед новим запитом
  page = 1;
  query = evt.currentTarget.elements.query.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Помилка',
      message: '❌ Введіть пошукову фразу',
      position: 'topCenter',
      timeout: 2500,
    });
    return;
  }

  toggleLoadMore(false); // Сховати кнопку перед запитом
  toggleLoader(true); // Показати індикатор завантаження

  try {
    const images = await queryPixabay(query, page);
    renderImages(images);
    toggleLoadMore(images.length);
  } catch (error) {
    console.error(error);
  } finally {
    toggleLoader(false); // Сховати індикатор завантаження
  }

  refs.form.reset();
}

async function onBtnClick() {
  page += 1;

  toggleLoader(true); // Показати індикатор завантаження

  try {
    const images = await queryPixabay(query, page);
    renderImages(images);
    toggleLoadMore(images.length);
  } catch (error) {
    console.error(error);
  } finally {
    toggleLoader(false); // Сховати індикатор завантаження
  }
}

// Функція рендерингу картинок
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

// Перевірка, чи потрібно показувати кнопку "Load More"
function toggleLoadMore(imageCount) {
  refs.btnLoadMore.style.display = imageCount < perPage ? 'none' : 'block';
}

// Показати/сховати індикатор завантаження
function toggleLoader(isLoading) {
  refs.loader.style.display = isLoading ? 'block' : 'none';
}
