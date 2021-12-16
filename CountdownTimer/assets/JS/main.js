/* const myTime = document.querySelector('#my-time');
const timez = new Date(2021, 11, 21, 23, 45, 58);
myTime.innerHTML = timez;


const timez1 = new Date();
const mySeconds = document.querySelector('#my-seconds');
mySeconds.innerHTML = timez1.getSeconds(); */

/* const D = new Date();
console.log(D);
console.log(D.getTime()); */





const myday = document.querySelector(".day");
const myhour = document.querySelector(".hour");
const mymin = document.querySelector(".min");
const mysec = document.querySelector(".sec");

const newYear = "1 Jan 2022";

function countdown() {


    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const seconds = (newYearDate - currentDate) / 1000;

    const Days = Math.floor(seconds / 3600 / 24);
    const Hours = Math.floor((seconds / 60 / 60) % 24);
    const Minutes = Math.floor(((seconds / 60 / 60) - Math.floor(seconds / 60 / 60)) * 60);
    const Seconds = Math.floor((seconds / 60 - Math.floor(seconds / 60)) * 60);

    myday.innerHTML = Days;
    myhour.innerHTML = Hours;
    mymin.innerHTML = Minutes;
    mysec.innerHTML = Seconds;


    console.log(Days, Hours, Minutes, Seconds);
}

countdown();
setInterval(countdown, 1000)