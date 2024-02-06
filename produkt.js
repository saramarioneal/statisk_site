window.addEventListener("DOMContentLoaded", init);

const urlP = new URLSearchParams(window.location.search);
const id = urlP.get("id");

const produktURL = "https://kea-alt-del.dk/t7/api/products/" + id;

function init() {
  console.log("init");

  fetch(produktURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      visData(json);
    });
}

function visData(cardJSON) {
  console.log(cardJSON);
  document.querySelector("h4").textContent = cardJSON.productdisplayname;
  //document.querySelector(".navn").textContent = cardJSON.brandname;
  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${cardJSON.id}.webp`;
  document.querySelector("img").src = imagePath;
}
