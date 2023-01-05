



  var videoGroupItems = document.querySelectorAll(".js-video-group-item");
  var videoWrapper = document.querySelector(".js-video");
  var openVideo = document.querySelectorAll(".js-video-open");
  var closeIcon = document.querySelector(".js-video-close");
  var videoElement;

  initClickEvents();

  function initClickEvents() {
    for (var i = 0; i < videoGroupItems.length; i++) {
      openVideo[i].addEventListener("click", function (e) {
        var targetNumber = e.target.getAttribute("data-item");

        videoWrapper.classList.add("open");
        videoWrapper.style.transform = "none";
        videoWrapper.style.opacity = 1;
        videoWrapper.style.pointerEvents = "auto";

        videoElement = document.querySelector(
          '.js-video-element'
        );

        videoElement.classList.add("open");

        setTimeout(function () {
          videoElement.play();
          initCloseEvents();
        }, 600);
      });
    }
  }

  function initCloseEvents() {
    closeIcon.addEventListener("click", function () {
      videoWrapper.classList.remove("open");
      videoWrapper.style.transform = "";
      videoWrapper.style.opacity = "";
      videoWrapper.style.pointerEvents = "";
      videoElement.pause();
      videoElement.currentTime = 0;
      videoElement.classList.remove("open");
    });

    videoElement.addEventListener("ended", function () {
      videoWrapper.classList.remove("open");
      videoWrapper.style.transform = "";
      videoWrapper.style.opacity = "";
      videoWrapper.style.pointerEvents = "";
      videoElement.pause();
      videoElement.currentTime = 0;
      videoElement.classList.remove("open");
    });
  }
