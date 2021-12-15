import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryCollection = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);
// console.log(galleryMarkup);
galleryCollection.insertAdjacentHTML('beforeend', galleryMarkup);
galleryCollection.addEventListener('click', onGalleryCollectionClick);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}" onclick="event.preventDefault()">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}
function onGalleryCollectionClick(event) {
  //   console.log(event.target);
  const modal = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
