(function () {
  let timer = null;
  let muteTimer = null;

  function allMedia() {
    return document.querySelectorAll('video, audio');
  }

  function muteAll() {
    allMedia().forEach((el) => {
      el.pause();
      el.muted = true;
      el.volume = 0;
    });
  }

  function unmuteAll() {
    allMedia().forEach((el) => {
      el.muted = false;
      el.volume = 1;
    });
  }

  function doDelay() {
    browser.storage.local.get(['delay', 'message']).then((result) => {
      const delay = (result.delay || 30) * 1000;
      const message = result.message || 'Do you really want to watch this, or are you just wasting time dickhead?.';

      const old = document.getElementById('yd_delay_div');
      if (old) old.remove();
      if (timer) clearTimeout(timer);
      if (muteTimer) clearInterval(muteTimer);

      const div = document.createElement('div');
      div.id = 'yd_delay_div';
      div.style =
        'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:999999999;' +
        'padding:20px;font-family:monospace;font-size:24px;color:#FFFFFF;' +
        'background-color:#000000;text-align:center;display:flex;' +
        'align-items:center;justify-content:center;';
      div.textContent = message;
      document.documentElement.appendChild(div);

      muteAll();
      muteTimer = setInterval(muteAll, 200);

      timer = setTimeout(() => {
        const el = document.getElementById('yd_delay_div');
        if (el) el.remove();
        if (muteTimer) clearInterval(muteTimer);
        unmuteAll();
      }, delay);
    });
  }

  doDelay();

  let last = location.href;
  setInterval(() => {
    if (location.href !== last) {
      last = location.href;
      doDelay();
    }
  }, 500);
})();
