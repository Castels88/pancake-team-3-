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

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

let lotteryChange = document.getElementById('lotteryChange')

function lotteryVariation() {
    setInterval( () => {
        let random = getRandomNum(70, 73);
        let random2 = getRandomNum(100, 999);
        lotteryChange.innerText = random + '.' + random2 + '$';
        // lotteryChange.innerText = random;
    }, 1000)
}

lotteryVariation()


// .format
// substring