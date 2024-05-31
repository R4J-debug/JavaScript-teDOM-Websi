for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.style.color = "white";

    var switchValue = this.innerHTML;

    switch (switchValue) {
      case "w":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

      case "s":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

      case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

      case "j":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

      case "k":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

      case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

      default:
        console.log(this, innerHTML);
        break;
    }
  });
}

/*var audio=new Audio('sounds/tom-1.mp3');
audio.play();*/

/* if (i === 0) {
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    }
    else if (i === 0) {
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    }
    else if (i === 0) {
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    }
    else if (i === 0) {
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    }
    else if (i === 0) {
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    }
    else if (i === 0) {
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    }
    else{
      
    }*/

/*
    if(document.querySelector(".w"))
      {
        var audio = new Audio("sounds/crash.mp3");
      audio.play();
      }

      else if (document.querySelector(".a")) {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
      }
      else if (document.querySelector(".s")) {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
      }
      else if (document.querySelector(".d")) {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
      }
      else if (document.querySelector(".j")) {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
      }
      else if (document.querySelector(".k")) {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
      }

      else{
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
      }
    
    */
