"use strict";
const d = document;
const _grid = d.querySelector(".grid");
const _result = d.getElementById("result");
d.addEventListener("DOMContentLoaded", () => {
  //opcion de cartas
  const _Acards = [
    {
      name: "zapallo",
      img: "assets/img1.png",
    },
    {
      name: "zapallo",
      img: "assets/img1.png",
    },
    {
      name: "hongo",
      img: "assets/img2.png",
    },
    {
      name: "hongo",
      img: "assets/img2.png",
    },
    {
      name: "uva",
      img: "assets/img3.png",
    },
    {
      name: "uva",
      img: "assets/img3.png",
    },
    {
      name: "manzana",
      img: "assets/img4.png",
    },
    {
      name: "manzana",
      img: "assets/img4.png",
    },
    {
      name: "hongoVenenoso",
      img: "assets/img5.png",
    },
    {
      name: "hongoVenenoso",
      img: "assets/img5.png",
    },
    {
      name: "girasol",
      img: "assets/img6.png",
    },
    {
      name: "girasol",
      img: "assets/img6.png",
    },
  ];
  _Acards.sort(() => 0.5 - Math.random());

  let cardsChosen = [];
  let cardsChosenID = [];
  let cardsWon = [];

  //crear el tablero de juego
  function createBoard() {
    for (let i = 0; i < _Acards.length; i++) {
      let card = d.createElement("img");
      card.setAttribute("src", "assets/front.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      _grid.appendChild(card);
    }
  }
  //check for matches
  function checkForMatch() {
    let cards = d.querySelectorAll("img");

    const optOneID = cardsChosenID[0];
    const optTwoID = cardsChosenID[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match!!!");
      cards[optOneID].setAttribute("src", "assets/blank.png");
      cards[optTwoID].setAttribute("src", "assets/blank.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optOneID].setAttribute("src", "assets/front.png");
      cards[optTwoID].setAttribute("src", "assets/front.png");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenID = [];
    console.log(cardsChosen);
    console.log(cardsChosenID);
    _result.textContent = cardsWon.length;
    if (cardsWon.length === _Acards.length / 2) {
      _result.textContent = "Congratulations!! you wind";
    }
  }
  //flip your card
  function flipCard() {
    let cardID = this.getAttribute("data-id");
    cardsChosen.push(_Acards[cardID].name);
    cardsChosenID.push(cardID);
    this.setAttribute("src", _Acards[cardID].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  //flip your card

  createBoard();
}); //end contentload
