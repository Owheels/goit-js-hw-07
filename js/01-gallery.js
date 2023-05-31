import { galleryItems } from "./gallery-items.js";
// Change code below this line
const container = document.querySelector(".gallery");
const image = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
  )
  .join("");
container.insertAdjacentHTML("beforeend", image);

[...container.children].forEach((item) =>
  item.addEventListener("click", onClick)
);
function onClick(evt) {
  evt.preventDefault();
  let imageEl = evt.currentTarget.querySelector(".gallery__image");
  let dataSource = imageEl.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${dataSource}">
`);
  instance.show();
  if (instance) {
    document.addEventListener("keydown", downEsc);
    function downEsc(evt) {
      if (evt.key === "Escape") {
        instance.close();
      }
    }
  }
}