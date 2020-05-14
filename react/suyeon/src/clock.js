const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText=`${hours}:${minutes}:${seconds}`;
}

function init(){
    getTime();
}

init();