    /* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-__-_*/
    const enterButton = document.getElementById('enterButton');// selectionner par son  id le bouton enter
                                                                  
    const againButton = document.getElementById('againButton');// selectionner par son  id le bouton rejouer
    
    const output = document.getElementById('outputText');// veuillez entrer un chiffre

    const out1 = document.getElementById('id_output1')// les chiffres validée par l'utilisateur
 
    let randomNumber = Math.ceil(Math.random()*100); // la fonction JS pour obtenir des nbres entier aléatoire de 1 à 100
/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-__-_*/
    function fun1(){
    out1.innerText = input;
    }
    /* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-__-_*/

    function checkNumber(){
      const input = document.getElementById('userInput').value;// récupère la valeur entrée par l'utilisateur
      
      if(input == randomNumber){
        output.innerText="Bravo vous avez Gagné "+ ", "+ " C'était bien le chiffre "+ randomNumber; // si l'utilisateur a entre le bon chiffre

        output.style.color="green";
        output.style.background="white"; // selectionner élement css
      }
      else if(input==""){
        alert("vous n'avez rien validé veuillez entrer un nombre entre 1 et 100")
      }
      else if(input==0){
        output.innerText="vous avez entre le chiffre 0 veuillez lire ci dessus les consignes du Jeu"  // modification de output 

      }
      
      else if(input > randomNumber && input<=100){
        output.innerText="Votre choix est trop élevé";
      }
      else if(input < randomNumber && input>=1){
        output.innerText="Votre choix est trop  bas";
      }
      else if(input<1){
        output.innerText=" Ce nombre est inférieur a zéro  il doit être compris entre 1 et  100";
      }
      else if(isNaN(input)){
        output.innerText="Vous n'avez pas entré un chiffre";//méthode qui permet verifier si c'est un chiffre
      }
      else{
        output.innerText=" Ce nombre est trop grand il doit être compris entre 1 et  100";
      }
 
    }
/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-__-_*/
    function display_num(){
        const input = document.getElementById('userInput').value;
        out1.innerText += input + "||" ;

        }
     /* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-__-_*/
    enterButton.addEventListener('click', display_num);
    enterButton.addEventListener('click', checkNumber);
    againButton.addEventListener('click', function(){
      location.reload();
    })
    