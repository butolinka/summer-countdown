function summerIsComing(){
    const June = new Date ('June 01, 2023 00:00');

    const now = new Date ();

    const diff = June-now;

    const msInSecond=1000;
    const msInMinute=60*1000;
    const msInHour=60*60*1000;
    const msInDay=24*60*60*1000;

    const DisplayDay=Math.floor(diff/msInDay);
    document.querySelector('.days').textContent=DisplayDay;
    const DisplayHour=Math.floor((diff%msInDay)/msInHour);
    document.querySelector('.hours').textContent=DisplayHour;
    const DisplayMinutes=Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('.minutes').textContent=DisplayMinutes;
    const DisplaySeconds=Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('.seconds').textContent=DisplaySeconds;

    if (diff<=0){
        document.querySelector('.days').textContent=0;
        document.querySelector('.hours').textContent=0;
        document.querySelector('.minutes').textContent=0;
        document.querySelector('.seconds').textContent=0;
        clearInterval(timer);

        hereIsSummer();
    }
}
let timer=setInterval( summerIsComing, 1000);

function hereIsSummer(){
    const heading=document.querySelector('h1');
    heading.textContent='Summer is here! Enjoy!';
    heading.classList.add('.june')
}

    const button = document.querySelector('.button');
    const audio = document.querySelector('#audio');
    
    button.addEventListener ('click', function() {
    
        if (audio.paused) {
            audio.play();
        }
        else {
            audio.pause();
        }
        })

