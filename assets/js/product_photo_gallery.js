function imageZoom(imgID, lensID) {
    var img = document.getElementById(imgID);
    var lens = document.getElementById(lensID);
    var cx = img.naturalWidth / img.offsetWidth;
    var cy = img.naturalHeight / img.offsetHeight;
  
    lens.style.backgroundImage = "url('" + img.src + "')";
    lens.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    lens.style.backgroundRepeat = "no-repeat";
  
    img.parentNode.addEventListener("mousemove", moveLens);
    img.parentNode.addEventListener("mouseleave", function() {
      lens.style.visibility = "hidden";
    });
    img.parentNode.addEventListener("mouseenter", function() {
      lens.style.visibility = "visible";
    });
  
    function moveLens(e) {
      var pos = getCursorPos(e);
      var x = pos.x - (lens.offsetWidth / 2);
      var y = pos.y - (lens.offsetHeight / 2);
  
      if (x < 0) x = 0;
      if (y < 0) y = 0;
      if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
      if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;
  
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      lens.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
  
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left - window.pageXOffset;
      y = e.pageY - a.top - window.pageYOffset;
      return { x: x, y: y };
    }
  }
  
  function setActiveImage(imageSrc) {
    var activeImage = document.getElementById('active-image');
    activeImage.src = imageSrc;
    imageZoom('active-image', 'zoom-lens');
  }
  
  // Initialize zoom for the default active image
  imageZoom('active-image', 'zoom-lens');
  