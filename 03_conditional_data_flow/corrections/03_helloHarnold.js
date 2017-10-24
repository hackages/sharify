// 1. implémentez ci-dessous la fonction hello de façon à ce qu'elle dise bonjour dans la console seulement si le prenom qu'elle recoit en paramètre est "Harnold"
function hello(prenom){
  if(prenom === "Harnold" || prenom === "Alice"){
    console.log(prenom);
  }
}

hello("bob"); // rien
hello(""); // rien
hello("Harnold"); // bonjour
hello("Alice");

// 2. Modifiez là pour qu'elle dise également bonjour si on lui passe le nom "Alice"
