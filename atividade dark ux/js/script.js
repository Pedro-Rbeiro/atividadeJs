timer();
function timer() {
  var countDownDate = new Date("May 31, 2023 15:37:25").getTime();
  var countDownDateValentine = new Date("Jun 31, 2023 15:37:25").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var distance2 = countDownDateValentine - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var daysValentine = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hoursValentine = Math.floor(
      (distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutesValentine = Math.floor(
      (distance2 % (1000 * 60 * 60)) / (1000 * 60)
    );
    var secondsValentine = Math.floor((distance2 % (1000 * 60)) / 1000);
    document.getElementById("date").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("date-valentine").innerHTML =
      daysValentine +
      "d " +
      hoursValentine +
      "h " +
      minutesValentine +
      "m " +
      secondsValentine +
      "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("date").innerHTML = "EXPIRED";
    }
    if (distance2 < 0) {
      clearInterval(x);
      document.getElementById("date-valentine").innerHTML = "EXPIRED";
    }
  }, 1000);
}

function change(e) {
  var activePhoto = (document.getElementById("active-photo"))
  activePhoto.src =
  "../img/pic"+e+".webp"
}
