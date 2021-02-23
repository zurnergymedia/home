(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let date = "Feb 28, 2021 00:22:000",
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








    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
    
      let date = "Feb 28, 2021 00:22:000",
          countDown = new Date(date).getTime(),
          x = setInterval(function() {    
    
            let now = new Date().getTime(),
                distance = countDown - now;
    
            // document.getElementById("days").innerText = Math.floor(distance / (day)),
              document.getElementById("hours2").innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById("colon22").textContent = ':',
              document.getElementById("minutes2").innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById("colon23").textContent = ':',
              document.getElementById("seconds2").innerText = Math.floor((distance % (minute)) / second);
              // document.getElementById("countdown").style.fontSize = "x-large";
  
    
            //do something later when date is reached
            if (distance < 0) {
              let countdown = document.getElementById("countdown2"),
                  content = document.getElementById("content3");
    
              // headline.innerText = "It's my birthday!";
              countdown.style.display = "none";
              // countdown.style.fontSize = "medium";
              content.style.display = "block";
    
              clearInterval(x);
            }
            //seconds
          }, 0)
      }());








      (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
      
        let date = "Feb 28, 2021 00:22:000",
            countDown = new Date(date).getTime(),
            x = setInterval(function() {    
      
              let now = new Date().getTime(),
                  distance = countDown - now;
      
              // document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours22").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("colon222").textContent = ':',
                document.getElementById("minutes222").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("colon233").textContent = ':',
                document.getElementById("seconds223").innerText = Math.floor((distance % (minute)) / second);
                // document.getElementById("countdown").style.fontSize = "x-large";
    
      
              //do something later when date is reached
              if (distance < 0) {
                let countdown = document.getElementById("countdown3"),
                    content = document.getElementById("content4");
      
                // headline.innerText = "It's my birthday!";
                countdown.style.display = "none";
                // countdown.style.fontSize = "medium";
                content.style.display = "block";
      
                clearInterval(x);
              }
              //seconds
            }, 0)
        }());







        (function () {
          const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;
        
          let date = "Feb 28, 2021 00:22:000",
              countDown = new Date(date).getTime(),
              x = setInterval(function() {    
        
                let now = new Date().getTime(),
                    distance = countDown - now;
        
                // document.getElementById("days").innerText = Math.floor(distance / (day)),
                  document.getElementById("hours222").innerText = Math.floor((distance % (day)) / (hour)),
                  document.getElementById("colon2222").textContent = ':',
                  document.getElementById("minutes22").innerText = Math.floor((distance % (hour)) / (minute)),
                  document.getElementById("colon232").textContent = ':',
                  document.getElementById("seconds22").innerText = Math.floor((distance % (minute)) / second);
                  // document.getElementById("countdown").style.fontSize = "x-large";
      
        
                //do something later when date is reached
                if (distance < 0) {
                  let countdown = document.getElementById("countdown4"),
                      content = document.getElementById("content5");
        
                  // headline.innerText = "It's my birthday!";
                  countdown.style.display = "none";
                  // countdown.style.fontSize = "medium";
                  content.style.display = "block";
        
                  clearInterval(x);
                }
                //seconds
              }, 0)
          }());