let aCard = document.querySelector(".card");
console.log(aCard);

let cards = document.querySelectorAll(".card");
console.log(cards);
console.log(cards[0]);
console.log(cards[1]);
console.log(cards[2]);
//cards에 해당하는걸 콘솔로 확인?.

//for 구문 사용,
// for (let idx = 0; idx < cards.length; id++) {
//   cards[idx].onclick = (e) => {
//     e.currentTarget.classList.toggle("card-selected");
//   };
// }

//for each 구문 사용.
cards.forEach((eachcard) => {
  eachcard.onclick = function (e) {
    e.currentTarget.classList.toggle("card-selected");
  };
});
