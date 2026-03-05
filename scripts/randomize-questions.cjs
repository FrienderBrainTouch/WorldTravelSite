'use strict';

const fs = require('fs');
const path = require('path');

const QUESTIONS_DIR = path.join(__dirname, '../public/data/questions');

/** Fisher-Yates shuffle (mutates array) */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Shuffle options array in place; correctAnswer stays valid (same value, new index) */
function shuffleOptions(obj) {
  if (obj && Array.isArray(obj.options)) {
    obj.options = shuffle([...obj.options]);
  }
}

function processFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);

  // flagFind: single object with options
  if (data.flagFind) {
    shuffleOptions(data.flagFind);
  }

  // foodFind: array of items, each with options; shuffle array order then each item's options
  if (data.foodFind && Array.isArray(data.foodFind)) {
    data.foodFind = shuffle([...data.foodFind]);
    data.foodFind.forEach(shuffleOptions);
  }

  // cultureFind: single object with options
  if (data.cultureFind) {
    shuffleOptions(data.cultureFind);
  }

  // landmarkFind: array of items with options; shuffle array order then each item's options
  if (data.landmarkFind && Array.isArray(data.landmarkFind)) {
    data.landmarkFind = shuffle([...data.landmarkFind]);
    data.landmarkFind.forEach(shuffleOptions);
  }

  // oxQuiz: array of items (no options), shuffle array order only
  if (data.oxQuiz && Array.isArray(data.oxQuiz)) {
    data.oxQuiz = shuffle([...data.oxQuiz]);
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log('Randomized:', path.basename(filePath));
}

const files = fs.readdirSync(QUESTIONS_DIR).filter((f) => f.endsWith('.json'));
files.forEach((f) => processFile(path.join(QUESTIONS_DIR, f)));
console.log('Done. Options and question order randomized in', files.length, 'files.');
