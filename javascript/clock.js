function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

    let name = prompt("Lütfen isminizi girin:", "");
    document.getElementById("myName").innerHTML = name;
