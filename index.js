let score = 0;
const scoreDisplay = document.getElementById('score');

const holes = document.getElementsByClassName('hole');

let proffess = ['prof','prof2', 'prof3'];
setInterval(function() {
  let choice = proffess[Math.floor(Math.random()*proffess.length)];
  const randomHoleIndex = Math.floor(Math.random() * holes.length);
  holes[randomHoleIndex].classList.toggle(choice);
}, 300);


const gameArea = document.getElementById('whack-a-prof');
gameArea.addEventListener('click', function(clickEvent) {
  console.log(clickEvent.target.className);
  //The className will return "hole" if a hole is clicked and '"hole " + classname' if a professor is clicked
  //so any time a professor is clicked it will be greater than four, otherwise it will equal four or 0
  //when anything else is clicked it returns 0 (which is less than 4 too)
  if (clickEvent.target.className.length>4) {
    remove(clickEvent.target.classList);
    score++;
    scoreDisplay.innerText = score;
  }
})

//this is so we can remove professors that are added without retyping the remove function every time
//(the classname returned each time is different so i can't find a solution that will be less than O(N),
//ideally it should just remove the one prof and be O(1))

function remove(event) {
  for(let i=0;i<proffess.length;i++){
    if(i==0)
      event.remove('prof');
    else
      event.remove('prof' +(i+1));
  }
}