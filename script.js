var obj;
document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 300);
    // setTime();
    setDate();
    setInterval(setTime, 1000);
}, false);

function setTime() {
    obj = new Date();
    time.innerText = obj.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
}
function setDate() {
    date.innerText = obj.toLocaleString('en-us', {weekday: 'long'}) + ' ' + obj.toLocaleString('en-us', {year: 'numeric', month: 'long', day: 'numeric'}) + ' -';
}
function pad(time) {
    return ('0' + time).slice(-2);
}