import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCollection = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryCollection.insertAdjacentHTML('beforeend', galleryMarkup);

const images = document.querySelectorAll('.gallery__link');
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', onGalleryCollectionClick);
}
console.log(images);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>`;
    })
    .join('');
}
function onGalleryCollectionClick(event) {
  event.preventDefault();

  const modal = basicLightbox.create(`
     <img src='${event.target.dataset.source}' width="800" height="600">
 `);

  modal.show();

  document.addEventListener('keydown', closeModal);
  function closeModal(event) {
    document.removeEventListener('keydown', closeModal);
    if (event.code === 'Escape') {
      modal.close();
      console.log(closeModal);
    }
  }
}
