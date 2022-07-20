        const settings = document.querySelector(".settings_elio svg")
        const connectWallet = document.querySelector(".mainbuttons")
        const container1 = document.querySelector(".big_container_elio")
        const container2 = document.querySelector(".big_container2_elio")
        const exit = document.querySelector(".exit")
        const exit2 = document.querySelector(".exit2")
        const presentation = document.querySelector(".presentation_elio")
        settings.onclick = function(){
            container1.style.display = "block";
            // presentation.style.animation = "3s ease-in-out 0s "
        }
        connectWallet.onclick = function() {
            container2.style.display = "block";
            // container2.style.transition = "all 10s";
        }
        exit.onclick = function() {
            container1.style.display = "none";
        }
        exit2.onclick = function() {
            container2.style.display = "none";
        }
