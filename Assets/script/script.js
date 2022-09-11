        const settings = document.querySelector(".Navbar_settings_menu svg")
        const connectWallet = document.querySelector(".Navbar_main_buttons")
        const startConnectWallet = document.querySelector('.mainbuttons')
        const startConnectWallet2 = document.querySelector("#moon_mainbuttons")
        const container1 = document.querySelector(".big_container")
        const container2 = document.querySelector(".big_container2")
        const exit = document.querySelector(".exit")
        const exit2 = document.querySelector(".exit2")
        const presentation = document.querySelector(".presentation")
        settings.onclick = function () {
            container1.style.display = "block";
        }
        connectWallet.onclick = function () {
            container2.style.display = "block";
        }
        startConnectWallet.onclick = function () {
            container2.style.display = "block";
        }
        startConnectWallet2.onclick = function () {
            container2.style.display = "block";
        }
        exit.onclick = function () {
            container1.style.display = "none";
        }
        exit2.onclick = function () {
            container2.style.display = "none";
        }

        //earn Passive Income
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
    {/* {<!--Script Elio-- > */}
    {/* < !--Fine Federico-- > */}

    // < !--Fine sezione HTML Laurent-- >
    // < !--Inizio sezione Script JS Laurent-- >
        // Win Millions In Prizes
        function randomNum(base, x) {
            return Math.floor((Math.random() * x) + base);
        }

        let prediction = randomNum(190, 10);
        let lottery1 = '61';
        let lottery2 = randomNum(255, 367);



        let leftCard = document.querySelector('.left-card');
        let amountLeftCard = leftCard.querySelector('.card-amount');
        let leftCardAmount = amountLeftCard.querySelector('h2');
        leftCardAmount.innerHTML = `${prediction}$ billion`;


        let rightCard = document.querySelector('.right-card');
        let amountRightCard = rightCard.querySelector('.card-amount');
        let rightCardAmount = amountRightCard.querySelector('h2');
        rightCardAmount.innerHTML = `$${lottery1}.${lottery2}`;

        /* /* // Cake Makes our world go round */
        let dataTable = document.querySelector('.cake-data-table');
        let data1 = dataTable.querySelector('.data1');
        let dataValue1 = data1.querySelector('.data-num');
        let data2 = dataTable.querySelector('.data2');
        let dataValue2 = data2.querySelector('.data-num');
        let data3 = dataTable.querySelector('.data3');
        let dataValue3 = data3.querySelector('.data-num');
        let data4 = dataTable.querySelector('.data4');
        let dataValue4 = data4.querySelector('.data-num');
        let data5 = dataTable.querySelector('.data5');
        let dataValue5 = data5.querySelector('.data-num');
        let data6 = dataTable.querySelector('.data6');
        let dataValue6 = data6.querySelector('.data-num');

        dataValue1.innerHTML = `${randomNum(147, 10)},${randomNum(000, 999)},${randomNum(000, 999)}`;
        dataValue2.innerHTML = `${randomNum(315, 10)},${randomNum(000, 999)},${randomNum(000, 999)}`;
        dataValue3.innerHTML = `${randomNum(750, 5)},000,000`;
        dataValue4.innerHTML = `$${randomNum(500, 20)} million`;
        dataValue5.innerHTML = `${randomNum(522, 10)}.${randomNum(000, 999)}.${randomNum(000, 999)}`;
        dataValue6.innerHTML = `13.${randomNum(00, 75)}/block`
    {/* <!--Fine sezone JS Laurent-- > */}
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