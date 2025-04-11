let favorites = {};

// Load khi trang mở
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("favorites");
  if (saved) {
    favorites = JSON.parse(saved);
    updateFavoritesList();
  }
});

function AddToFavorites(productName) {
  if (favorites[productName]) {
    favorites[productName]++;
  } else {
    favorites[productName] = 1;
  }

  saveFavorites();
  updateFavoritesList();
}

function removeFavorite(productName) {
  delete favorites[productName];
  saveFavorites();
  updateFavoritesList();
}

function saveFavorites() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function updateFavoritesList() {
  const list = document.getElementById("favorites-list");
  list.innerHTML = "";

  for (const name in favorites) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${name} (${favorites[name]} lần)</span>
      <button class="remove-btn" onclick="removeFavorite('${name}')">❌</button>
    `;
    list.appendChild(li);
  }
}
