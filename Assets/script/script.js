const connectWallet = document.querySelector(".mainbuttons")
const container2 = document.querySelector(".big_container2_elio")
const exit2 = document.querySelector(".exit2")

connectWallet.onclick = function () {
    container2.style.display = "block";
    // container2.style.transition = "all 10s";
}

exit2.onclick = function () {
    container2.style.display = "none";
}
const cambio1 = document.querySelector(".switch")
const cambio2 = document.querySelector(".switch2")
const bigContainer1 = document.querySelector(".Earn_p_i_bottom_switch_container")
const bigContainer2 = document.querySelector(".Earn_p_i_bottom_switch_container2")
const littleContainer1 = document.querySelector(".Earn_p_i_lower_big_container")

cambio1.onclick = function () {
    bigContainer2.style.display = "flex";
    bigContainer1.style.display = "none";

}
cambio2.onclick = function () {
    bigContainer2.style.display = "none";
    bigContainer1.style.display = "flex";
}

setInterval(cambio1.onclick, 3500)
setInterval(cambio2.onclick, 7000)