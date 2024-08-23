document.addEventListener("DOMContentLoaded", () => {
    const enterScreen = document.getElementById('enter-screen');
    const content = document.getElementById('content');
    const backgroundMusic = document.getElementById('background-music');
    const toggleMusicButton = document.getElementById('toggle-music');
    const typewriterText = document.getElementById('typewriter-text');
    const screamerImage = document.getElementById('screamer-image');
    const screamerSound = document.getElementById('screamer-sound');

    let textIndex = 0;
    let musicClickCount = 0;
    let spaceClickCount = 0;
    const maxClicks = 50;
    const timeWindow = 2000;  // 2 seconds

    let lastClickTime = 0;

    const texts = [
        "1€ per spot or free if you are kind",
        "love yourself",
        "https://paypal.me/NeyRoxWZ",
        "Jul ❤️",
        "Graphic designer",
        "https://neyrox.lol/",
    ];

    function typeWriter(text, i, callback) {
        if (i < text.length) {
            typewriterText.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(() => typeWriter(text, i + 1, callback), 100);
        } else {
            setTimeout(() => {
                deleteWriter(text, i, callback);
            }, 2000);  // Wait 2 seconds before starting to delete
        }
    }

    function deleteWriter(text, i, callback) {
        if (i > 0) {
            typewriterText.innerHTML = text.substring(0, i - 1) + '<span aria-hidden="true"></span>';
            setTimeout(() => deleteWriter(text, i - 1, callback), 100);
        } else {
            callback();
        }
    }

    function startTypeWriterAnimation() {
        typeWriter(texts[textIndex], 0, () => {
            textIndex = (textIndex + 1) % texts.length;
            startTypeWriterAnimation();
        });
    }

    function triggerScreamer() {
        screamerSound.volume = 1.0;  // Set volume to the maximum
        screamerSound.play();
        screamerImage.style.display = 'flex';  // Show the screamer image
        setTimeout(() => {
            screamerImage.style.display = 'none'; // Hide after 5 seconds
            screamerSound.pause();
            screamerSound.currentTime = 0;  // Reset the audio to the start
        }, 5000);  // Show the screamer for 5 seconds
    }

    function handleMusicButtonClick() {
        const now = Date.now();
        const timeSinceLastClick = now - lastClickTime;

        if (timeSinceLastClick > timeWindow) {
            musicClickCount = 0;  // Reset count if time window exceeded
        }

        lastClickTime = now;

        if (backgroundMusic.paused) {
            backgroundMusic.play();
            toggleMusicButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
            musicClickCount++;
        } else {
            backgroundMusic.pause();
            toggleMusicButton.innerHTML = '<i class="fa-solid fa-play"></i>';
            musicClickCount++;
        }

        if (musicClickCount >= maxClicks) {
            triggerScreamer();
            musicClickCount = 0; // Reset click count
        }
    }

    enterScreen.addEventListener('click', () => {
        enterScreen.classList.add('fade-out');
        setTimeout(() => {
            enterScreen.remove();
            content.classList.remove('hidden');
            backgroundMusic.play();
            toggleMusicButton.classList.remove('hidden');
            startTypeWriterAnimation();
        }, 1000);  // Match the duration of the fade-out
    });

    toggleMusicButton.addEventListener('click', handleMusicButtonClick);

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            handleMusicButtonClick();
            spaceClickCount++;
            if (spaceClickCount >= maxClicks) {
                triggerScreamer();
                spaceClickCount = 0; // Reset click count
            }
        }
    });
});

 // <![CDATA[
    var colour = "#ffffff";
    var sparkles = 120;
  
  
    var x = ox = 400;
  var y = oy = 300;
  var swide = 800;
  var shigh = 600;
  var sleft = sdown = 0;
  var tiny = new Array();
  var star = new Array();
  var starv = new Array();
  var starx = new Array();
  var stary = new Array();
  var tinyx = new Array();
  var tinyy = new Array();
  var tinyv = new Array();
  
  window.onload = function() {
  if (document.getElementById) {
  var i, rats, rlef, rdow;
  for (var i = 0; i < sparkles; i++) {
    var rats = createDiv(3, 3);
    rats.style.visibility = "hidden";
    document.body.appendChild(tiny[i] = rats);
    starv[i] = 0;
    tinyv[i] = 0;
    var rats = createDiv(5, 5);
    rats.style.backgroundColor = "transparent";
    rats.style.visibility = "hidden";
    var rlef = createDiv(1, 5);
    var rdow = createDiv(5, 1);
    rats.appendChild(rlef);
    rats.appendChild(rdow);
    rlef.style.top = "2px";
    rlef.style.left = "0px";
    rdow.style.top = "0px";
    rdow.style.left = "2px";
    document.body.appendChild(star[i] = rats);
  }
  set_width();
  sparkle();
  }
  };
  
  function sparkle() {
  var c;
  if (x != ox || y != oy) {
  ox = x;
  oy = y;
  for (c = 0; c < sparkles; c++) {
    if (!starv[c]) {
      star[c].style.left = (starx[c] = x) + "px";
      star[c].style.top = (stary[c] = y) + "px";
      star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
      star[c].style.visibility = "visible";
      starv[c] = 50;
      break;
    }
  }
  }
  for (c = 0; c < sparkles; c++) {
  if (starv[c]) update_star(c);
  if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 25);
  }
  
  function update_star(i) {
  if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
  stary[i] += 1 + Math.random() * 3;
  if (stary[i] < shigh + sdown) {
    star[i].style.top = stary[i] + "px";
    starx[i] += (i % 15 - 0) / 5;
    star[i].style.left = starx[i] + "px";
  }
  else {
    star[i].style.visibility = "hidden";
    starv[i] = 0;
    return;
  }
  }
  else {
  tinyv[i] = 50;
  tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
  tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
  tiny[i].style.width = "2px";
  tiny[i].style.height = "2px";
  star[i].style.visibility = "hidden";
  tiny[i].style.visibility = "visible";
  }
  }
  
  function update_tiny(i) {
  if (--tinyv[i] == 25) {
  tiny[i].style.width = "1px";
  tiny[i].style.height = "1px";
  }
  if (tinyv[i]) {
  tinyy[i] += 1 + Math.random() * 3;
  if (tinyy[i] < shigh + sdown) {
    tiny[i].style.top = tinyy[i] + "px";
    tinyx[i] += (i % 5 - 2) / 5;
    tiny[i].style.left = tinyx[i] + "px";
  }
  else {
    tiny[i].style.visibility = "hidden";
    tinyv[i] = 0;
    return;
  }
  }
  else tiny[i].style.visibility = "hidden";
  }
  
  document.onmousemove = mouse;
  
  function mouse(e) {
  set_scroll();
  y = (e) ? e.pageY : event.y + sdown;
  x = (e) ? e.pageX : event.x + sleft;
  }
  
  function set_scroll() {
  if (typeof (self.pageYOffset) == "number") {
  sdown = self.pageYOffset;
  sleft = self.pageXOffset;
  }
  else if (document.body.scrollTop || document.body.scrollLeft) {
  sdown = document.body.scrollTop;
  sleft = document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
  sleft = document.documentElement.scrollLeft;
  sdown = document.documentElement.scrollTop;
  }
  else {
  sdown = 0;
  sleft = 0;
  }
  }
  
  window.onresize = set_width;
  
  function set_width() {
  if (typeof (self.innerWidth) == "number") {
  swide = self.innerWidth;
  shigh = self.innerHeight;
  }
  else if (document.documentElement && document.documentElement.clientWidth) {
  swide = document.documentElement.clientWidth;
  shigh = document.documentElement.clientHeight;
  }
  else if (document.body.clientWidth) {
  swide = document.body.clientWidth;
  shigh = document.body.clientHeight;
  }
  }
  
  function createDiv(height, width) {
  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = height + "px";
  div.style.width = width + "px";
  div.style.overflow = "hidden";
  div.style.backgroundColor = colour;
  return div;
  }
  // ]]>
  
    // Function to update the position of the fixed element
    function updateFixedElementPosition() {
      const fixedElement = document.getElementById('fixedElement');
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
  
      // Calculate the new position
      const newPositionLeft = viewportWidth / 2 - fixedElement.offsetWidth / 2;
      const newPositionTop = viewportHeight / 2 - fixedElement.offsetHeight / 2;
  
      // Set the new position
      fixedElement.style.left = newPositionLeft + 'px';
      fixedElement.style.top = newPositionTop + 'px';
    }
  
    // Initial position update
    updateFixedElementPosition();
  
    // Update position on window resize
    window.addEventListener('resize', updateFixedElementPosition);

    