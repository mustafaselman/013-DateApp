
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
    digitalClock.innerHTML = hr + ':' + min + ':' + sec;

}

setInterval(currentTime, 1000);



