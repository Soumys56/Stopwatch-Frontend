window.onload = function () {
  var seconds = 0;
  var tens = 0;
  var appendtens = document.getElementById("tens");
  var appendsec = document.getElementById("sec");
  var startbutton = document.getElementById("start_button");
  var stopbutton = document.getElementById("stop_button");
  var resetbutton = document.getElementById("reset_button");
  var intervel;

  // startbutton eventlistner
  startbutton.addEventListener("click", start);
  //this function used for start timer
  function start() {

    intervel = setInterval(startTimer, 10);

  }
  //stop evenlistner 
  stopbutton.addEventListener("click", stop);
    //this function used for stop timer
  function stop() {
    clearInterval(intervel);
  }
//reset button eventlistner
  resetbutton.addEventListener("click", reset);
  function reset() {
    clearInterval(intervel);
    tens = "00";
    seconds = "00";

    appendsec.innerHTML = seconds;
    appendtens.innerHTML = tens;

  }

  // this function is used for set the starttimer 
  function startTimer() {
    tens++;
    if (tens <= 9) {
      appendtens.innerHTML = "0" + tens;
      console.log(tens + "one");
    }
    if (tens > 9) {
      appendtens.innerHTML = tens;
      console.log(tens + "two");

    }
    if (tens > 99) {
      seconds++;
      appendsec.innerHTML = "0" + seconds;

      tens = 0;
      appendtens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      appendtens.innerHTML = seconds;
      console.log(seconds + "four");

    }
  }



} 