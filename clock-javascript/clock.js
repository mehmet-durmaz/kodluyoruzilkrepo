let username = prompt("isminiz");


let askname = () => {
    
    let myName = document.getElementById("myName");
    myName.innerHTML = username;
};


showTime = () => {
    let clock = document.querySelector(".clock");
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (day == 1) {
        day = "Pazartesi";
    } else if (day == 2) {
        day = "Salı";
    } else if (day == 3) {
        day = "Çarşamba";
    } else if (day == 4) {
        day = "Perşembe";
    } else if (day == 5) {
        day = "Cuma";
    } else if (day == 6) {
        day = "Cumartesi";
    } else if (day == 7) {
        day = "Pazar";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    let time = hour + ":" + minute + ":" + second + " " + day;
    clock.innerHTML = time;

    setTimeout(showTime, 1000);
};

showTime();
askname();
