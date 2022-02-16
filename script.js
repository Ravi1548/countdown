
var newYears = '01-01-2023';
const btn = document.getElementById('button');

btn.addEventListener('click',function countdown(){

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

     const totalseconds = (newYearsDate - currentDate)/1000;

     const days = Math.floor(totalseconds / 3600 /  24);
     const hours = Math.floor(totalseconds / 3600) % 24;
     const minutes = Math.floor(totalseconds / 60) % 60;
     const seconds = Math.floor(totalseconds%60);

document.getElementById('days').innerHTML = days;
document.getElementById('hours').innerHTML = hours;
document.getElementById('mins').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;

setInterval(countdown,1000);
if (days==0 && hours ==0  && minutes == 0 && seconds == 0){
    var popeup = document.getElementById('big-text');
    var clr = document.getElementsByTagName('span');
    popeup.innerHTML = 'HAPPY NEW YEAR 2023';
    clr.innerHTML = '';
    
}

});
