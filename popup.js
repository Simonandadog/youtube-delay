const delayInput = document.getElementById('delay');
const messageInput = document.getElementById('message');
const saveButton = document.getElementById('save');
const statusDiv = document.getElementById('status');

browser.storage.local.get(['delay', 'message']).then((result) => {
  delayInput.value = result.delay || 30;
  messageInput.value = result.message || 'Do you really want to watch this, or are you just wasting time dickhead?.';
});

saveButton.addEventListener('click', () => {
  const delay = Math.max(30, parseInt(delayInput.value, 10) || 30);
  const message = messageInput.value.trim() || 'Do you really want to watch this, or are you just wasting time dickhead?.';
  browser.storage.local.set({ delay, message }).then(() => {
    statusDiv.textContent = 'Saved';
    setTimeout(() => { statusDiv.textContent = ''; }, 1500);
  });
});
