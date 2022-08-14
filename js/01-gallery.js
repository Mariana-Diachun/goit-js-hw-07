import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector('.gallery');

const imgMurkup = createImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMurkup);

galleryContainer.addEventListener('click', onGalleryImgClick);



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


function onGalleryImgClick(evt) {
    evt.preventDefault();
    const isImgSwatchEl = evt.target.classList.contains('gallery__image');
    if (!isImgSwatchEl) {
        return;
    }

    
    let selectedImage = evt.target.dataset.source;

    const instance = basicLightbox.create(`
        <img src="${selectedImage}"/>
    `)

    instance.show();

    const visible = instance.visible();

    galleryContainer.addEventListener('keydown', onEscClick);

    function onEscClick(evt) {
        evt.preventDefault();

        if (!visible) {
            return
        }
        if (evt.key === "Escape") {
            instance.close();
        }
        
    }
}
