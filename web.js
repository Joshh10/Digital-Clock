// Grab HTML elements for hours, minutes, and seconds
let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

// Updating the clock every 1 second
setInterval(()=>{
    let currentTime = new Date()
    
    // Format each unit to always be two digits (adds leading zero if needed)
    hrs.innerHTML = (currentTime.getHours() < 10?"0":" ") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10?"0":" ") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10?"0":" ") + currentTime.getSeconds();
},1000)
