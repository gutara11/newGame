let score = 0;
const scoreDisplay = document.getElementById('score');

const holes = document.getElementsByClassName('hole');

setInterval(function() {
  let proffess = ['prof','prof2', 'prof3'];
  let choice = proffess[Math.floor(Math.random()*proffess.length)];
  const randomHoleIndex = Math.floor(Math.random() * holes.length);
  holes[randomHoleIndex].classList.toggle(choice);
}, 300);

const gameArea = document.getElementById('whack-a-prof');
gameArea.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.matches('.prof')||clickEvent.target.matches('.prof2')||clickEvent.target.matches('.prof3')) {
    clickEvent.target.classList.remove('prof');
    clickEvent.target.classList.remove('prof2');
    clickEvent.target.classList.remove('prof3');
    score++;
    scoreDisplay.innerText = score;
  }
})