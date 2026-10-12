const buttons = document.querySelectorAll(".add-button");
const countText = document.querySelector(".bag-count");
const itemsText = document.querySelector(".bag-items");
const totalText = document.querySelector(".bag-total");
const clearButton = document.querySelector(".clear-button");

let bag = [];

function showBag() {
  if (!countText || !itemsText || !totalText) {
    return;
  }

  countText.textContent = bag.length;

  if (bag.length === 0) {
    itemsText.textContent = "Your bag is empty so far.";
    totalText.textContent = "0";
    return;
  }

  const names = bag.map(function (item) {
    return item.name;
  });
  const total = bag.reduce(function (sum, item) {
    return sum + Number(item.price);
  }, 0);

  itemsText.textContent = names.join(", ");
  totalText.textContent = total;
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    bag.push({
      name: button.dataset.name,
      price: button.dataset.price
    });
    showBag();
  });
});

if (clearButton) {
  clearButton.addEventListener("click", function () {
    bag = [];
    showBag();
  });
}

const forms = document.querySelectorAll("form[data-form]");

forms.forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = form.querySelector('[name="name"]');
    const message = form.querySelector(".form-message");
    const name = nameInput.value.trim();

    if (form.dataset.form === "signup") {
      message.textContent = "Thanks, " + name + "! You signed up for dino news.";
    } else {
      message.textContent = "Thanks, " + name + "! Your message is ready.";
    }

    form.reset();
  });
});
