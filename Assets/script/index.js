////

let time = document.getElementById('moon_timerCountdown');
let data = "Sept 05, 2022 22:37:25";
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

////

tempo() 

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
////

let lotteryChange = document.getElementById('moon_lotteryChange')

function lotteryVariation() {
    setInterval( () => {
        let random = getRandomNum(70, 73);
        let random2 = getRandomNum(100, 999);
        lotteryChange.innerText = random + '.' + random2 + '$';
        // lotteryChange.innerText = random;
    }, 1000)
}

lotteryVariation()

////

const countdown = document.querySelector('moon_countdown')
const slider = document.querySelector('moon_slider')

let index = 0;

function carousel() {
//   let i;
  let x = document.getElementsByClassName("moon_countdown");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  index++;
  if (index > x.length) {index = 1}    
  x[index-1].style.display = "flex";
  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

carousel();

////

    // function sliderCarousel() {
    //     const x = document.querySelector('slidertrasparente')
    //     const y = document.querySelector('slidercolorato')

    //     x.style.backgroundColor = 'red';
    //     y.innerText = 'ac'
    // }

    // sliderCarousel();

// .format
// substring