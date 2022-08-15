import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const imgMurkup = createImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMurkup);

function createImgGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image"
            src="${preview}" 
            alt="${description}"/>
        </a>
        `;
    }).join("");
}

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});
    
