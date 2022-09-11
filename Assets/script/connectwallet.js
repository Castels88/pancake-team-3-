const connectWallet = document.querySelector(".mainbuttons")
const bgContainer2 = document.querySelector(".big_container2_elio")
const exit2 = document.querySelector(".exit2")

connectWallet.onclick = function () {
    bgContainer2.style.display = "block";
    // container2.style.transition = "all 10s";
}

exit2.onclick = function () {
    bgContainer2.style.display = "none";
}