function timeToWalk(steps, footprint, speed) {
    let distance = steps * footprint;
    let rest = (Math.floor(distance / 500)) * 60;
    let speedMetersPerSec = (speed * 1000) / (60 * 60);
    let time = distance / speedMetersPerSec + rest;

    let seconds = Math.round((time % 60));
    time -= time % 60;
    time = time / 60;
    let min = Math.floor((time % 60));
    time -= time % 60;
    time = time / 60;
    let hr = Math.floor((time % 60));
    if (hr < 10) {
        hr = '0' + hr;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (min < 10) {
        min = '0' + min;
    }

    console.log(`${hr}:${min}:${seconds}`);
}

timeToWalk(4000, 0.60, 5); 
