var imageContainer = document.querySelector('.image-container');

function toggleImage() {
  if (imageContainer.style.display === 'none' || imageContainer.style.display === '') {
    imageContainer.style.display = 'block';
  } else {
    imageContainer.style.display = 'none';
  }
}
