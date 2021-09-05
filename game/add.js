let kopatuch = {
  money: 20,
  damage: 10,
  health: 10,
};
let shop = {
  health: 1000000000000000000000000000000,
  damage: 10000000000000000000000000000000,
};

let caterpillar = {
  money: 100000000000000000000000000000000,
  health: 20,
  damage: 10,
};

let coloradoBeatle = {
  money: 0,
  health: 100,
  damage: 20,
};

let locust = {
  money: 0,
  health: 150,
  damage: 30,
};

function show() {
  alert(
    `Ваши средства: ${kopatuch.money}, Ваше здоровье:${kopatuch.health}, Ваш домаг:${kopatuch.damage}`
  );
}
function shopOb() {
  let choise = prompt(
    "Выберите, что вы хотите купить\n  1 - Маска + 10 здоровья цена 5 цветунь \n  2 - Опрыскиватель + 10 дамага  15 цветунь"
  );
  const priceMask = 5;
  const priceShovel = 15;
  switch (choise) {
    case "1":
      kopatuch.money = kopatuch.money - priceMask;
      if (kopatuch.money < 0) {
        alert("Недостаточно цветунь");
        kopatuch.money = kopatuch.money + priceMask;
      } else {
        kopatuch.health = kopatuch.health + 10;
      }
      break;
    case "2":
      kopatuch.money = kopatuch.money - priceShovel;
      if (kopatuch.money < 0) {
        alert("Недостаточно цветунь");
        kopatuch.money = kopatuch.money + priceShovel;
      } else {
        kopatuch.damage = kopatuch.damage + 10;
      }
      break;
    default:
      alert("Вы ничего не выбрали");
  }
}

function batleCaterpillar(zlodey) {
  let batle = zlodey.health / kopatuch.damage;
  let damage = kopatuch.health / zlodey.damage;

  if (batle > damage) {
    alert("Вы проиграли");
  } else if (zlodey == caterpillar) {
    alert("Победа");
    kopatuch.health = kopatuch.health + 10;
    kopatuch.money += 10;
  } else if (zlodey == coloradoBeatle) {
    alert("Победа");
    kopatuch.damage = kopatuch.damage + 10;
    kopatuch.money += 15;
  } else {
    alert("Победа! БОСС ПОВЕРЖЕН");
    kopatuch.health = kopatuch.health + 10;
    kopatuch.money += 30;
  }
}
