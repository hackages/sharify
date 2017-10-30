let clicks = 0;

const counter = $('#counter');
const plus = $('#plus');
const minus = $('#minus');

function updateText(){
  counter.text(clicks);
}

function handlePlus(){
  clicks++;
  updateText();
}

function handleMinus(){
  clicks--;
  updateText();
}

plus.click(handlePlus);
minus.click(handleMinus);
