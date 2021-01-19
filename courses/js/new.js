(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let date = "Jan 20, 2021 20:22:000",
        countDown = new Date(date).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          // document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("colon").textContent = ':',
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("colon2").textContent = ':',
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            // document.getElementById("countdown").style.fontSize = "x-large";

  
          //do something later when date is reached
          if (distance < 0) {
            let countdown = document.getElementById("countdown"),
                content = document.getElementById("content2");
  
            // headline.innerText = "It's my birthday!";
            countdown.style.display = "none";
            // countdown.style.fontSize = "medium";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());