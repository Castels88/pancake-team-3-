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