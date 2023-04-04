let today = new Date();
let but1 = document.getElementById("but1")
let but2 = document.getElementById("but2")
let but3 = document.getElementById("but3")
let but4 = document.getElementById("but4")
let show1 = document.getElementById("show1")
let show2 = document.getElementById("show2")
let show3 = document.getElementById("show3")
let show4 = document.getElementById("show4")
let months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY",
    "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
let days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
setInterval(() => {

    if (today == Date) {

    } else {
        let result = new Date()
        but1.innerHTML = result.getHours();
        but2.innerHTML = result.getMinutes();
        but3.innerHTML = result.getSeconds();

        show1.innerHTML = days[result.getDay()];
        show2.innerHTML = months[result.getMonth()];
        show3.innerHTML = result.getDate();
        show4.innerHTML = result.getFullYear();

    }
}, 0);

function setalarm() {
    // let alarm = document.getElementById("alarm");
    let result = new Date()
    let hrs = document.getElementById("hrs");
    let mins = document.getElementById("mins");
    let screen = document.getElementById("screen");
    let work = setInterval(() => {
        if (hrs.value == but1.innerHTML && mins.value == but2.innerHTML) {
            screen.innerHTML = "Alarm is ringing"
        }
        //  else if(work==result) {
        //     clearInterval(work);
        //     screen.innerHTML = "Time Up"
        // }
    });
}