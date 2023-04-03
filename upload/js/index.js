const input = document.getElementById("upload");
const wrapper = document.querySelector(".slider-wrapper");
const popup = document.querySelector(".image-popup");
const popupImage = document.querySelector(".popup-image");
const closePopup = document.querySelector(".close-popup");

input.addEventListener("change", () => {
  const files = input.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type.match(/image.*/)) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = document.createElement("img");
        img.src = event.target.result;
        img.addEventListener("click", () => {
          popupImage.src = event.target.result;
          popup.style.display = "block";
        });
        const li = document.createElement("li");
        li.appendChild(img);
        wrapper.appendChild(li);
      };
    }
  }
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
