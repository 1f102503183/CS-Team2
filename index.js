const imageSlider = document.getElementById("imageSlider");

const url_list = [
  "./home/img/homepage_image/A.jpg",
  "./home/img/homepage_image/B.jpg",
  "./home/img/homepage_image/C.jpg",
];

let index = 0;

if (imageSlider) {
  imageSlider.src = url_list[index];
}

function changeImage(index) {
  imageSlider.src = url_list[index % url_list.length];
}

const timeID = setInterval(() => {
  index = index + 1;
  console.log(index);
  changeImage(index);
}, 3000);

const nextbutton = document.getElementById("nextbutton");
const backbutton = document.getElementById("backbutton");

if (nextbutton && backbutton) {
  nextbutton.addEventListener("click", () => {
    index = index + 1;
    changeImage(index);
  });
  backbutton.addEventListener("click", () => {
    index = index - 1;
    changeImage(index);
  });
}
