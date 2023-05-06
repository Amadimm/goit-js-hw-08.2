
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector(`.gallery`);

const newImages = galleryItems.map(
    image =>
      `<li>
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
   
      alt="${image.description}"
    />
  </a>
</li>`
  )
  .join(' ');

galleryList.style.listStyleType = 'none';

galleryList.insertAdjacentHTML('beforeend', newImages);

console.log(galleryItems);


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});