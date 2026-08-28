(function () {
  browser.storage.local.get(['delay', 'message']).then((result) => {
    const delay = (result.delay || 15) * 1000;
    const message = result.message || 'Just a moment, please be mindful of your time.';

    const div = document.createElement('div');
    div.id = 'yd_delay_div';
    div.style =
      'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:999999999;' +
      'padding:20px;font-family:monospace;font-size:24px;color:#FFFFFF;' +
      'background-color:#000000;text-align:center;display:flex;' +
      'align-items:center;justify-content:center;';
    div.textContent = message;
    document.documentElement.appendChild(div);

    setTimeout(() => {
      const el = document.getElementById('yd_delay_div');
      if (el) el.remove();
    }, delay);
  });
})();
