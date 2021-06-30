const timer = (id,deadline)=>{ // Course Version
    const addZero = (num) => {
        if (num <= 9) {
            return "0"+num;
        }else{
            return num;
        }
    };
    
    const getTimeRemaining = (endTime)=>{
        const t = Date.parse(endTime) - Date.parse(new Date()),
              seconds = Math.floor((t/1000) % 60),
              minutes = Math.floor((t/1000/60) % 60),
              hours = Math.floor((t/1000*60*60) % 24),
              days = Math.floor(t/(1000*60*60*24));
        
        return{
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    };

    const setClock = (selector,endtime)=>{
        const timer = document.querySelector(selector),
            days = document.querySelector("#days"),
            hours = document.querySelector("#hours"),
            minutes = document.querySelector("#minutes"),
            seconds = document.querySelector("#seconds"),
            timeInterval = setInterval(updateClock,1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if(t.total <= 0) {
                days.textContent = 0;
                hours.textContent = 0;
                minutes.textContent = 0;
                seconds.textContent = 0;

                clearInterval(timeInterval);
            }
        }
    };
    setClock(id,deadline);
};

// *My Version*
// const timer = (daysEl,hoursEl,minutesEl,secondsEl) =>{
//     let deadLine = new Date("Jul 31, 2021 00:00").getTime();

//     setInterval(function () {
//     let now = new Date().getTime(),
//         est = deadLine - now,
//         days = Math.floor(est / (1000 * 60 * 60 * 24)),
//         hours = Math.floor(est % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
//         minutes = Math.floor(est % (1000 * 60 * 60 ) / (1000 * 60)),
//         seconds = Math.floor(est % (1000 * 60 ) / 1000);

//     document.querySelector(daysEl).innerHTML = days ;
//     document.querySelector(hoursEl).innerHTML = hours ;
//     document.querySelector(minutesEl).innerHTML = minutes ;
//     document.querySelector(secondsEl).innerHTML = seconds;

//     if (est < 0) {
//         document.querySelector(daysEl).innerHTML = 0 ;
//         document.querySelector(hoursEl).innerHTML = 0 ;
//         document.querySelector(minutesEl).innerHTML = 0 ;
//         document.querySelector(secondsEl).innerHTML = 0;
//     }
//     });
// }

export default timer;