class Shoe {
  constructor(manufacturer, price, size, color, image) {
    this.manufacturer = manufacturer;
    this.price = price;
    this.size = size;
    this.color = color;
    this.image = image;
  }
}

let shoes = JSON.parse(localStorage.getItem("shoes")) || [
];

function displayShoes(list) {
  const shoeList = document.getElementById("shoeList");
  shoeList.innerHTML = "";
  list.forEach((shoe, index) => {
    shoeList.insertAdjacentHTML("beforeend", `
      <div class="card">
        <img src="${shoe.image}" alt="${shoe.manufacturer}">
        <h3>${shoe.manufacturer}</h3>
        <p>Ціна: ${shoe.price} грн</p>
        <p>Розмір: ${shoe.size}</p>
        <p>Колір: ${shoe.color}</p>
        <div class="card-buttons">
          <div class="upper-buttons">
            <button class="details-btn" data-index="${index}">Детальніше</button>
            <button class="buy-btn" data-index="${index}">В кошик</button>
          </div>
            <button class="edit-btn" data-index="${index}">Редагувати</button>
        </div>
      </div>
    `);
  });

  document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const shoe = list[e.target.dataset.index];
      alert(`Виробник: ${shoe.manufacturer}\nЦіна: ${shoe.price} грн\nРозмір: ${shoe.size}\nКолір: ${shoe.color}`);
    });
  });

  document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const shoe = list[e.target.dataset.index];
      alert(`Товар "${shoe.manufacturer}" додано в кошик!`);
    });
  });

  document.querySelectorAll(".edit-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      localStorage.setItem("editIndex", index);
      window.location.href = "edit.html";
    });
  });
}

displayShoes(shoes);

document.getElementById("searchInput").addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();
  const filtered = shoes.filter(shoe =>
    shoe.manufacturer.toLowerCase().includes(query) ||
    shoe.color.toLowerCase().includes(query)
  );
  displayShoes(filtered);
});

document.getElementById("sortSelect").addEventListener("change", (event) => {
  const value = event.target.value;
  let sorted = [...shoes];
  if (value === "price") sorted.sort((a, b) => a.price - b.price);
  else if (value === "size") sorted.sort((a, b) => a.size - b.size);
  else if (value === "manufacturer") sorted.sort((a, b) => a.manufacturer.localeCompare(b.manufacturer));
  displayShoes(sorted);
});

document.getElementById("countButton").addEventListener("click", () => {
  const total = shoes.reduce((sum, shoe) => sum + shoe.price, 0);
  document.getElementById("totalPrice").textContent = `Загальна вартість: ${total} грн`;
});

localStorage.setItem("shoes", JSON.stringify(shoes));
