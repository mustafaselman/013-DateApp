
function currentTime()
{
    var dt = new Date();
    var sec = dt.getSeconds();
    var min = dt.getMinutes();
    var hr = dt.getHours();
    currentTimeRotation(sec, min, hr);
    currentTimeDigital(sec, min, hr);
}

function currentTimeRotation(sec, min, hr)
{
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    console.log(hr + ":" + min + ":" + sec);
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}

function currentTimeDigital(sec, min, hr)
{
    if (hr<10){
        digitalClock.innerHTML = '0'+ hr + ':' + min + ':' + sec;
    }
    if (min<10){
        digitalClock.innerHTML =  hr + ':' + '0'+ min + ':' + sec;
    }
    if (sec<10){
        digitalClock.innerHTML = hr + ':' + min + ':' + '0'+ sec;
    }
    if (min<10 && sec<10){
        digitalClock.innerHTML =  hr + ':' + '0'+ min + ':' + '0'+ sec;
    }
    if (hr<10 && sec<10){
        digitalClock.innerHTML = '0'+ hr + ':' +  min + ':' + '0'+ sec;
    }
    if (min<10 && hr<10){
        digitalClock.innerHTML = '0'+ hr + ':' + '0'+  min + ':' + sec;
    }
    if (min<10 && hr<10 && sec<10){
        digitalClock.innerHTML = '0'+ hr + ':' + '0'+  min + ':' +'0'+ sec;
    }

}

setInterval(currentTime, 1000);



