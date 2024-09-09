let isStrike = false;
let isSpare = false;
let isBonus = false;

let no_of_rolls = 10;
let no_of_pins = 10;
let score = 0;

const scoreIndex = ['Strike-X', 'Spare-$', 'OpenFrame-|'];
const randomIndex = Math.ceil (Math.random () * 3);

let scores = {
  score1: 0,
  score2: 0,
  score3: 0,
  score4: 0,
  score5: 0,
  score6: 0,
  score7: 0,
  score8: 0,
  score9: 0,
  score10: 0,
};

let frames = [
  'frame1',
  'frame2',
  'frame3',
  'frame4',
  'frame5',
  'frame6',
  'frame7',
  'frame8',
  'frame9',
  'frame10',
];

let singleStrike = '';
const strikeBowl = () => {
  singleStrike = scoreIndex[randomIndex];
  return scoreIndex[randomIndex];
};

for (let i = 0; i < frames.length; i++) {
  const current_frame = frames[i];
  let rollIndex = 1;
  for (let rollIndex = 0; rollIndex < 2; rollIndex++) {
    if (i === 0) {
      strikeBowl ();
      if (singleStrike === 'Strike-X') {
        scores.score1 = 10;
      } else if (singleStrike === 'Spare - $') {
        scores.score1 = 5;
        rollIndex++;
      } else {
        scores.score1 = 0;
      }
    }
  }
}

frames.forEach (element => {});

console.log (scores);
