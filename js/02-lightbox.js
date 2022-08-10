import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector('.gallery');
const imgMurkup = createImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMurkup);

galleryContainer.addEventListener('click', onGalleryImgClick);

function createImgGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image"
            src="${preview}" 
            alt="${description}" />
        </a>
        `;
    }).join("");
}


function onGalleryImgClick(evt) {
    evt.preventDefault();
    const isImgSwatchEl = evt.target.classList.contains('gallery__image');
    if (!isImgSwatchEl) {
        return;
    }
    console.log(evt.target);
}
