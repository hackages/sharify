/**
 *  écouter les changements sur tous les select du formulaire
 */
const pateOption = $('#pate');
const pizzaOption = $('#pizza');
const supplementsOption = $('#supplements');
const payementOption = $('#payement');
const numberOption = $('#number');
const progressBar = $('#progressbar');


let data = {
  pizza: 0,
  pate: 0,
  supplement: 0,
  payement: 0,
  number: 1,
};

let oldProgress = 0;
function updateProgress(){
  let totalProgress = 0;
  if(data.pizza){
    totalProgress += 25;
  }
  if(data.pate){
    totalProgress = totalProgress + 25;
  }
  if(data.payement){
    totalProgress += 25;
  }
  if(data.supplement){
    totalProgress += 25;
  }
  
  progressBar.width(totalProgress + "%");
};

function updatePrixTotal(){
  let total = 0;
  total = data.pizza + data.pate + data.supplement;
  total = total * data.number;
  if(data.number >= 10){
    total = total - ((total / 100) * 30);
  }
  total = total + data.payement;
  $('#totalprice').text(total + '€');
  updateProgress();
}

function pateChanged(){
  const newPrixPate = Number(pateOption.val());
  data.pate = newPrixPate;
  updatePrixTotal();
}

function pizzaChanged(){
  const newPrixPizza = Number(pizzaOption.val());
  data.pizza = newPrixPizza;
  updatePrixTotal();
}

function suppChanged(){
  const newPrixsupplements = Number(supplementsOption.val());
  data.supplement = newPrixsupplements;
  updatePrixTotal();
}

function numberChanged(){
  const newNumber = Number(numberOption.val());
  data.number = newNumber;
  updatePrixTotal();
}

function payementChanged(){
  const newPayement = Number(payementOption.val());
  data.payement = newPayement;
  updatePrixTotal();
}

pateOption.on('change', pateChanged);
pizzaOption.on('change', pizzaChanged);
payementOption.on('change', payementChanged);
numberOption.on('input', numberChanged);
supplementsOption.on('change', suppChanged);