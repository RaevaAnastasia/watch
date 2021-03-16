"use strict";

const watch = document.querySelector('.watch');
const changeFormatButton = document.querySelector('.change-format');
let isFormatted = false;

function showCurrentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let interval = '';

    if (isFormatted) {
        interval = hours > 12 ? "pm" : "am";
        hours = changeFormat(hours);
    }

    watch.innerHTML = `${addZero(hours)} : ${addZero(minutes)} : ${addZero(seconds)} ${interval}`;
}

function addZero(number) {
    return number < 10 ? '0' + number : number;
}

function changeFormat(number) {
    return number > 12 ? number - 12 : number;
}

changeFormatButton.addEventListener('click', () => isFormatted = !isFormatted);
setInterval(showCurrentTime, 1000);
