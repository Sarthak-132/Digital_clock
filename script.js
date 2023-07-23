setInterval(() =>{
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const currentTime = `${hours}:${minutes}:${seconds}`;

    const digitalClock = document.getElementById('time');
    digitalClock.innerHTML = " Current Time : "+ currentTime;
},1000)