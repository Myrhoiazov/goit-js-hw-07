import { galleryItems } from './gallery-items.js';
// Change code below this line

{
  /* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> */
}

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const li = galleryItems
  .map((elem) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${elem.original}">
    <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
  </a> 
    </li> `;
  })
  .join('');

galleryRef.innerHTML = li;

galleryRef.addEventListener('click', handleclickImage);
let gallery = new SimpleLightbox('.gallery a', {'captionsData': 'alt', 'captionDelay': 250});


function handleclickImage(event) {

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  event.preventDefault();

}
