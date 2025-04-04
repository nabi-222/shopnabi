document.getElementById("buy-now-btn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

document.querySelector(".confirm-btn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

