// Definir las imágenes por categoría
const galleryImages = {
    Cocina: [
        'cocina Ref.jpg',
        'cocina2.jpg',
        'cocina3.jpg',
        'cocina4.jpg',
        // ... agregar nombres de las imágenes de cocina
    ],
    Baño: [
        'baño Ref.jpg',
        'baño2.jpg',
        'baño3.jpg',
        'baño4.jpg',
        // ... agregar nombres de las imágenes de baño
    ],
    Interior: [
        'interior Ref.jpg',
        'interior2.jpg',
        'interior4.jpg',
        'interior5.jpg',
        // ... agregar nombres de las imágenes de interior
    ],
    Exterior: [
        'exterior2.jpg',
        'exterior3.jpg',
        'exterior4.jpg',
        'exterior5.jpg',
        'exterior6.jpg',
        // ... agregar nombres de las imágenes de exterior
    ]
};

$(document).ready(function() {
    Cocina();
});

function renderGallery(category, images) {
    limpiar();
    const galleryGrid = document.getElementById('gallery-grid');
    
    images.forEach(image => {
        const imagePath = `assets/img/${category}/${image}`;
        const card = `
            <div class="col-12 col-md-6 col-lg-4 my-3" id="${category}">
                <div class="card h-100">
                    <img src="${imagePath}" 
                         class="card-img-top" 
                         alt="${category} - ${image}"
                         loading="lazy">
                    <div class="image-overlay">
                        <h3>${category}</h3>
                        <p>Diseño personalizado de ${category.toLowerCase()} con acabados de alta calidad y atención al detalle.</p>
                    </div>
                </div>
            </div>
        `;
        galleryGrid.insertAdjacentHTML('beforeend', card);
    });
}

function Cocina() {
    renderGallery('Cocina', galleryImages.Cocina);
}

function Baño() {
    renderGallery('Baño', galleryImages.Baño);
}

function Interior() {
    renderGallery('Interior', galleryImages.Interior);
}

function Exterior() {
    renderGallery('Exterior', galleryImages.Exterior);
}

function limpiar() {
    const galleryGrid = document.getElementById('gallery-grid');
    galleryGrid.innerHTML = '';
}