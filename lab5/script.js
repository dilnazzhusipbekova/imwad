// Audio file paths
const notes = {
  C: new Audio('sounds/C.wav'),
  D: new Audio('sounds/D.wav'),
  E: new Audio('sounds/E.wav'),
  F: new Audio('sounds/F.wav'),
  G: new Audio('sounds/G.wav'),
  A: new Audio('sounds/A.wav'),
  B: new Audio('sounds/B.wav')
};


function playSound(note) {
  notes[note].currentTime = 0; 
  notes[note].play();
}


document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', () => {
      playSound(key.id);
      key.classList.add('active');
      setTimeout(() => {
          key.classList.remove('active');
      }, 200); 
  });
});


document.addEventListener('keydown', (event) => {
  const keyMap = {
      'a': 'C',
      's': 'D',
      'd': 'E',
      'f': 'F',
      'g': 'G',
      'h': 'A',
      'j': 'B'
  };
  const note = keyMap[event.key];
  if (note) {
      playSound(note);
      const keyElement = document.getElementById(note);
      keyElement.classList.add('active');
      setTimeout(() => {
          keyElement.classList.remove('active');
      }, 200);
  }
});
