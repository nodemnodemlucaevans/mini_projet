
    async function convertir() {
      const amount = document.getElementById("amount").value;//elle récupere une valeur avec un id amount et garde la valeur dans la constante amount
      const from = document.getElementById("from").value;//ici ont recuere la valeur avec id from et la done a la constante from
      const to = document.getElementById("to").value;//ici ont recuere la valeur avec id to et la done a la constante to

      if (amount === "" || isNaN(amount)) {
        document.getElementById("result").innerText = " Entrez un montant valide.";
        return;
      } //verifie dàbord si l'utilisateur a entrer un valeur ou pas,ensuite ont verifie que la valeur amount est un nombre ou pas et si il est pas sa renvoie true
      //ensuite il  y as une ligne qui peermet d'afficher une message d'erreur avec l'id result ensuite la conditionqui est entrain de effuctuer prend fin 

      const apiKey = "80009a3a32257adcaf6f0c55"; 
      const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}`;
      //ont n'as cree une constate apikey et ont n'as mis la cle l'api ensuite il ya la constant url qui contien t l'url de l'api et aussi ont utilise apikey qui contient la cle de l'api et il y a aussi les variable qui contiendrons les device debut et de fin
      try{
      const response = await fetch(url); //  ici ont Va chercher les données depuis l’adresse url et attends que la réponse arrive
        const data = await response.json();//  ici ont vas Prendre la réponse et  transforme en objet  utilisable de javascript

        if (data.result === "success") { //si l'api as bien reussi ont affiche success
          const rate = data.conversion_rate; // ont recupere le taux de conversion
          const converted = (amount * rate).toFixed(2); // ici ont multiplie le mountant par le rate et ont fixe les dcecimals apres le point a deux
          document.getElementById("result").innerText = `${amount} ${from} = ${converted} ${to}`; //les resultat sont afficher
        } else {
          document.getElementById("result").innerText = " Erreur de conversion."; //si l'api ne repond pas le messsage erreur s'affiche
        }
      } catch (err) {
        document.getElementById("result").innerText = " Problème de connexion."; //si l'api est inaccessible ont affiche erreur de connexion
      }
    }
  
