const startConnectWallet = document.querySelector(".mainbuttons");
const container2 = document.querySelector(".big_container2_elio");
const exit2 = document.querySelector(".exit2");

startConnectWallet.onclick = function () {
  container2.style.display = "block";
};

exit2.onclick = function () {
  container2.style.display = "none";
};
