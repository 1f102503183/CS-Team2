const imageSlider = document.getElementById("imageSlider");

const url_list = [
  "./home/img/homepage_image/A.jpg",
  "./home/img/homepage_image/B.jpg",
  "./home/img/homepage_image/C.jpg",
];

if (imageSlider) {
  imageSlider.src = url_list[0];
}

let index = 0;

function changeImage(imageSlider) {
  imageSlider.src = url_list[(index + 1) % url_list.length];
}
