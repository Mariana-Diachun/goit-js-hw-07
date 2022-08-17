import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createImgGallery (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
    }).join("");
}

const imgMurkup = createImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMurkup);

galleryContainer.addEventListener('click', onGalleryImgClick);

const instance = basicLightbox.create(`<img src=""/>`);

function onGalleryImgClick(evt) {
    evt.preventDefault();

    const isImgSwatchEl = evt.target.classList.contains('gallery__image');
    if (!isImgSwatchEl) {
        return;
    }

    let selectedImage = evt.target.dataset.source;

    const modalImage = instance.element().querySelector('img');
    modalImage.src = selectedImage;
    instance.show();
    
    galleryContainer.addEventListener('keydown', onEscClick);
}

function onCloseModal() {
    instance.close()
    window.removeEventListener ('keydown', onEscClick)
}
    
function onEscClick(evt) {
    if (evt.code === "Escape") {
        onCloseModal();
    }  
}