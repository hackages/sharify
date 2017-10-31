const spams = [
  "Bacon ipsum dolor amet beef bresaola rump, jerky pork sausage pork chop chuck short ribs shank. Andouille tenderloin sausage, jowl frankfurter fatback capicola turducken venison pastrami. Venison strip steak rump, picanha pork belly sausage corned beef tenderloin bresaola biltong flank boudin pastrami. Sirloin short loin jowl rump pork chop pancetta, meatloaf fatback beef swine. Meatball spare ribs rump pork chop shankle, tri-tip tongue turducken beef ball tip. Ball tip picanha spare ribs, short ribs kevin chicken brisket doner pancetta shankle tongue tenderloin.",
  
  "Pork loin sausage brisket, alcatra beef ribs bacon salami biltong cow tail meatball tenderloin meatloaf chuck. Turkey short loin boudin, kevin tri-tip venison cow rump spare ribs. Turkey chuck filet mignon, hamburger tri-tip cupim landjaeger beef ribs sirloin jowl andouille pork chop tenderloin. Alcatra ham hock short loin tri-tip corned beef shankle fatback burgdoggen meatloaf turducken. Sirloin ham swine, shank short ribs leberkas pork belly flank filet mignon pork chop hamburger tri-tip kielbasa landjaeger.",
  
  "Ground round brisket chuck fatback leberkas. Beef ribs frankfurter prosciutto beef. Sirloin sausage hamburger alcatra chicken. Spare ribs pig meatball pancetta cupim bresaola. Shankle spare ribs sausage hamburger chuck pork, biltong pork loin chicken frankfurter tail ground round meatloaf. Tri-tip sirloin bresaola alcatra chicken.",
  
  "Porchetta tenderloin jerky leberkas salami turkey chicken short ribs tail turducken pig strip steak. Corned beef flank pork chuck turkey strip steak hamburger jowl. Pork chop venison swine kevin pancetta pork belly spare ribs fatback hamburger beef. Fatback brisket bresaola, short ribs ham venison shoulder pork belly turducken. Jerky doner shank biltong. Cupim venison capicola picanha, pork belly rump bresaola meatloaf boudin bacon leberkas kielbasa jowl ball tip meatball. Strip steak sirloin flank burgdoggen pastrami drumstick corned beef shoulder.",
  
  "Burgdoggen ball tip beef ribs flank drumstick. Turkey venison strip steak pastrami beef ribs biltong, capicola tongue picanha. Flank cupim turkey, landjaeger sausage jowl picanha andouille frankfurter pig t-bone jerky meatloaf venison. Burgdoggen andouille pork chop tail porchetta doner brisket frankfurter pig. Swine ground round pork loin strip steak fatback capicola hamburger boudin spare ribs ham hock. Turkey jerky beef ribs filet mignon flank sausage, fatback venison chuck kielbasa bresaola bacon ham.",
  
  "Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!",
];

function genSpam(){
  return spams[Math.floor(
    Math.random() * spams.length
  )];
}

window.genSpam = genSpam;
