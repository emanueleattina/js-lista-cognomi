// chiedere all'utente il cognome
// inserirlo in un array con altri cognomi
// stampare l'array ordinato alfabeticament
// scrivere la posizione nella lista in cui l'utente si trova

var lista = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];
var cognomeUtente;
var cognomeUpper
var posizione;
var i;

cognomeUtente = prompt("Inserisci il tuo cognome");

cognomeUpper = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1);
lista.push(cognomeUpper);

lista.sort();

for (i = 0; i < lista.length; i++)
{
  document.getElementById('lista').innerHTML += "<li>" + lista[i] + "</li>";
  if (cognomeUpper == lista[i])
  {
    posizione = i;
    console.log(posizione);
  }
}

document.getElementById('posizione').innerHTML += "Ti trovi alla posizione numero " + (posizione + 1);