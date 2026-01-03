const lista_email_invitati = [
  "artur.mamedov@gmail.com",
  "stefano.cappellini@gmail.com",
  "tiziano.nicolai@gmail.com",
];

let email_inserita = prompt("Inserisci email");
let trovata = false;

while (!trovata) {
  for (let i = 0; i < lista_email_invitati.length; i++) 
  {
    if (email_inserita === lista_email_invitati[i]) 
    {
      trovata = true;
      break;
    }
  }

  if (!trovata) {
    email_inserita = prompt("Email non riconosciuta. Inserisci di nuovo:");
  }
}

alert("Accesso consentito! Benvenuto.");
