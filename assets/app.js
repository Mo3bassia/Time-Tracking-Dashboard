let allCards = document.querySelectorAll(".main-card");
let choicesList = document.querySelector(".choises ul");
let all = [];

async function getData() {
  let data = await fetch("data.json");
  let json = await data.json();
  json.forEach((item, index) => {
    all.push(item);
  });
  showData();
}

function showData() {
  let active = choicesList.querySelector("li.active").textContent.toLowerCase();
  all.forEach((item, index) => {
    console.log(item);
    allCards[index].querySelector(".card_title span").textContent = item.title;
    allCards[index].querySelector(".card_desc .card_hours span").textContent =
      item.timeframes[active].current;
    allCards[index].querySelector(
      ".card_desc .card_previous span"
    ).textContent = item.timeframes[active].previous;
    console.log(item.timeframes[active].current);
  });
}

getData();

choicesList.querySelectorAll("li").forEach((li) => {
  li.onclick = function () {
    choicesList.querySelectorAll("li").forEach((li) => {
      li.classList.remove("active");
      li.classList.remove("inactive");
    });
    this.classList.add("active");
    showData();
  };
});
