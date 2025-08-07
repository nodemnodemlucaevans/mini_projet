
    async function convertir() {
      const amount = document.getElementById("amount").value;
      const from = document.getElementById("from").value;
      const to = document.getElementById("to").value;

      if (amount === "" || isNaN(amount)) {
        document.getElementById("result").innerText = " Entrez un montant valide.";
        return;
      }

      const apiKey = "80009a3a32257adcaf6f0c55"; 
      const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "success") {
          const rate = data.conversion_rate;
          const converted = (amount * rate).toFixed(2);
          document.getElementById("result").innerText = `${amount} ${from} = ${converted} ${to}`;
        } else {
          document.getElementById("result").innerText = " Erreur de conversion.";
        }
      } catch (err) {
        document.getElementById("result").innerText = " Problème de connexion.";
      }
    }
  
