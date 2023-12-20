
function cagir() {


const derece = 6;
const zaman = new Date();
var saniye = zaman.getSeconds() * derece;
var deqiqe = zaman.getMinutes() * derece;
var saat = zaman.getHours() * 30 + (deqiqe / 12)
document.querySelector(".saniye").style.transform = `rotate(${saniye}deg)`
document.querySelector(".deqiqe").style.transform = `rotate(${deqiqe}deg)`
document.querySelector(".saat").style.transform = `rotate(${saat}deg)`

 
}

setInterval(cagir, 1000);
