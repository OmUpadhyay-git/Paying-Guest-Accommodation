function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close lightbox on outside click
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});
