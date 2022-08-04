import { galleryItems } from './gallery-items.js';
// Change code below this line

{
  /* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */
}

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const item = galleryItems.reduce((acc, elem) => {
  return (acc += `<div class="gallery__item">
    <a class="gallery__link" href="${elem.original}">
      <img
        class="gallery__image"
        src="${elem.preview}"
        data-source="${elem.original}"
        alt="${elem.description}"
      />
    </a>
  </div> `);
}, '');

galleryRef.insertAdjacentHTML('beforeend', item);

galleryRef.addEventListener('click', handleclickImage);

function handleclickImage(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  event.preventDefault();

  const modalMarkUp = `<img width="960" src="${event.target.dataset.source}">`;

  const instance = basicLightbox.create(modalMarkUp, {
    onShow: () => {
      window.addEventListener('keydown', onKeyDown);
    },
    onClose: () => {
      window.removeEventListener('keydown', onKeyDown);
    },
  });

  function onKeyDown(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }

  instance.show();
}
