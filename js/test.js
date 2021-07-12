import galleryItems from './gallery-items.js';

// 1) Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryList = document.querySelector('ul.js-gallery');

const makeGalleryMarkup = ({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`;
};

const galleryMarkup = galleryItems.map(makeGalleryMarkup).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

// 2) Реализация делегирования на галерее ul.js-gallery и
// получение url большого изображения.

// gallery.addEventListener('click', onImageClick);

// function onImageClick(e) {
//   if (e.target.nodeName !== 'A') {
//     return;
//   }

//   const lightboxOverlay = document.querySelector('.js-lightbox');
//   lightboxOverlay.classList.add('is-open');
// }

// 3) Открытие модального окна по клику на элементе галереи.
