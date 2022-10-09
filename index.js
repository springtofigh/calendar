const date = new Date();

const renderCalender = () => {
    date.setDate(1);

//12 Months
const months = ["January", "February", "March", "April", "May", "June", "Julay", "August", "September", "October", "November", "December"];

document.querySelector(".date h1").innerHTML = months[date.getMonth()];
document.querySelector(".date p").innerHTML = new Date().toDateString();

let days = "";

//from 1 t0 31 days
const monthDays = document.querySelector(".days");
//fix last days of a month
const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
//Last days of prev month
const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
//Last days of current month
const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();

const nextDays = 7 - lastDayIndex -1

const firstDayIndex = date.getDay();

for (let i = firstDayIndex; i > 0; i--) {
    days +=`<div class="prev-date">${prevLastDay - i + 1}</div>`
}

for (let i =1 ; i <= lastDay ; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days +=`<div class="today">${i}</div>`;
    } else {
        days +=`<div>${i}</div>`
} 
}

for (let i= 1; i <= nextDays; i++) {
    days +=`<div class="next-date">${i}</div>`
    monthDays.innerHTML = days
    }
}

const arrowLeft = document.querySelector(".prev")
arrowLeft.addEventListener("click" ,() => {
    date.setMonth(date.getMonth() - 1);
    renderCalender();
})

const arrowRight = document.querySelector(".next")
arrowRight.addEventListener("click" ,() => {
    date.setMonth(date.getMonth() + 1);
    renderCalender();
})

renderCalender();