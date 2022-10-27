const clock=document.querySelector('.clock');

function runClock(){
    var time=new Date();

    // console.log(time);

    var hrs=time.getHours();
    var mins=time.getMinutes();
    var sec=time.getSeconds();

    var txt="AM";

    if(hrs>12){
        hrs=hrs-12;
        txt="PM";
    }
    else if(hrs==0){
        hrs=12;
        txt="AM";
    }

    hrs=hrs<10?'0'+hrs:hrs;
    mins=mins<10?'0'+mins:mins;
    sec=sec<10?'0'+sec:sec;

    clock.innerHTML=(`${hrs}:${mins}:${sec}  ${txt}` );

}
runClock();
setInterval(runClock,1000);