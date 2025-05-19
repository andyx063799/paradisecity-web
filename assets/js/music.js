const btn = document.getElementById('play-music');
const audio = document.getElementById('bg-music');
const note = btn.querySelector('.note');

audio.volume = 0.1;

btn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    note.classList.add('playing');
  } else {
    audio.pause();
    note.classList.remove('playing');
  }
});

audio.addEventListener('play', () => note.classList.add('playing'));
audio.addEventListener('pause', () => note.classList.remove('playing'));