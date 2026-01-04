const lista_email_invitati = [
  `artur.mamedov@gmail.com`,
  `stefano.cappellini@gmail.com`,
  `tiziano.nicolai@gmail.com`,
];

let email_inserita = prompt(`Inserisci email`, `artur.mamedov@gmail.com`);
let trovata = false;

while (!trovata) {
  for (let i = 0; i < lista_email_invitati.length; i++) {
    if (email_inserita === lista_email_invitati[i]) {
      trovata = true;
      break;
    }
  }

  if (!trovata) {
    email_inserita = prompt(`Email non riconosciuta. Inserisci di nuovo:`);
  }
}

const min_dado = 1;
const max_dado = 6;
let stop_dado = false;
let risultato_computer = 0;
let risultato_giocatore = 0;
let decisione = ``;

alert(`Gioco dei Dadi`);

while (!stop_dado) {
  alert(`Il Computer lancia il dado`);
  risultato_computer = Math.floor(Math.random() * (max_dado - min_dado + 1) + min_dado);
  alert(`Esce ${risultato_computer}!`);
  
  alert(`Lanci il dado`);
  risultato_giocatore = Math.floor(Math.random() * (max_dado - min_dado + 1) + min_dado);
  alert(`Esce ${risultato_giocatore}!`);
  
  if (risultato_computer > risultato_giocatore) {
    alert(`Hai perso`);
  } else if (risultato_computer === risultato_giocatore) {
    alert(`Pareggio`);
  } else {
    alert(`Hai vinto!`);
  }
  
  decisione = prompt(`Vuoi rigiocare? (si/no)`, `si`);
  
  if (decisione !== `si`) {
    stop_dado = true;
  }
}

alert(`Grazie per aver giocato!`);