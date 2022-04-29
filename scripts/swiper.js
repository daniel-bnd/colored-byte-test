const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  preloadImages: false,
  lazyLoading: true,
});

const IMAGES_API_BASE_URL = "https://picsum.photos/v2/list?page=1&limit=3";

fetchAndAppendImages();

async function fetchAndAppendImages() {
  const images = await fetchImages();
  const imagesURL = getImagesUrl(images);

  imagesURL.forEach(image => {
    const img = document.createElement("img");
    img.className = "swiper-slide";
    img.src = image;
    swiper.appendSlide(img);
  });
}

async function fetchImages() {
  const response = await fetch(IMAGES_API_BASE_URL);
  const images = await response.json();
  return images;
}

function getImagesUrl(images) {
  const imagesURL = [];
  images.map(image => {
    imagesURL.push(image.download_url);
  });
  return imagesURL;
}
