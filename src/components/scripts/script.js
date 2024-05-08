const image1 = document.getElementById('viewimage');
const image2 = document.getElementById('hideimage');

image1.addEventListener('click', function() {
  image1.classList.add('hidden');
  image2.classList.remove('hidden');
});

image2.addEventListener('click', function() {
  image2.classList.add('hidden');
  image1.classList.remove('hidden');
});