    document.addEventListener('DOMContentLoaded', function() {
      let currentIndex = 0;
      const images = document.querySelectorAll('#imageGallery img');
      const totalImages = images.length;
    
      function updateGallery(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
      }
    
      updateGallery(0);
    
      document.getElementById('prevBtn').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateGallery(currentIndex);
      });
    
      document.getElementById('nextBtn').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateGallery(currentIndex);
      });
    });