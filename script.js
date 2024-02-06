window.addEventListener("DOMContentLoaded", init);

const produktURL = "https://kea-alt-del.dk/t7/api/products";

let cardTemplate;
let cardContainer;

function init() {
  console.log("init");

  cardTemplate = document.querySelector(".card_template");
  console.log("cardTemplate", cardTemplate);

  cardContainer = document.querySelector(".produktliste_grid");
  console.log("cardContainer", cardContainer);

  fetch(produktURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showproducts(json);
    });
}

function showproducts(cardJSON) {
  let cardClone;

  cardJSON.forEach((card) => {
    console.log("Card", card);

    cardClone = cardTemplate.cloneNode(true).content;
    cardClone.querySelector("a").href = `produkt.html?id=${card.id}`;
    const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${card.id}.webp`;
    cardClone.querySelector(".card_image").src = imagePath;

    //Udsolgt

    cardClone.querySelector(
      ".card_image"
    ).alt = `Picture of a ${card.productdisplayname}`;
    cardClone.querySelector(".card_name").textContent = card.productdisplayname;
    cardClone.querySelector(".subtle").textContent = card.brandname;
    cardClone.querySelector(".pris_text").textContent = card.price;
    cardClone.querySelector(".pris").textContent = card.pris;
    cardClone.querySelector(".tilbud").textContent = card.soldout;
    cardClone.querySelector(".read_more").href = "produkt.html";
    cardContainer.appendChild(cardClone);
  });
}
