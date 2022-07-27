let time = document.getElementById('timerCountdown');
let data = "Jul 22, 2022 15:37:25";
let countDownDate = new Date(data).getTime();

function tempo() {
    setInterval( () => {
        const now = new Date().getTime();
        let interval = countDownDate - now;

        let days = Math.floor(interval / (1000 * 60 * 60 * 24));
        let hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((interval % (1000 * 60)) / 1000);

        time.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    }, 1000)
}

tempo() 