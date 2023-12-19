// 1) crea una funzione che controlli due numeri interi. Ritorna  true se uno dei due è 50 o se la somma dei 2 è 50

// ::::::::::::::BEGIN::::::::::::::
// const numeri = function (n, n2) {
//   let result;
//   if (n === 50 || n2 === 50) {
//     result = true;
//   } else if (n + n2 == 50) {
//     result = true;
//   } else {
//     result = false;
//   }

//   return console.log(result);
// };
// numeri(5, 41);
// ::::::::::::::END::::::::::::::

// 2) crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come
// parametri e ritorna la stringa modificata

// ::::::::::::::BEGIN::::::::::::::
// const rimuovi = function (stringa, posizione) {
//   stringa = stringa.split("");
//   stringa.splice(posizione, 1);
//   stringa = stringa.join("");

//   return console.log(stringa);
//
// };
// rimuovi("bastardo", 2);
// ::::::::::::::END::::::::::::::

// 3) crea una funzione che controlli se due numeri siano compresi tra 40-60 o tra 70-100. ritorna true se rispecchiano queste condizioni altrimenti false.

// ::::::::::::::BEGIN::::::::::::::
// const paragone = function (n1, n2) {
//   let result = false;
//   if (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) {
//     result = true;
//   } else if (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100) {
//     result = true;
//   } else {
//     result = false;
//   }

//   return console.log(result);
// };

// paragone(70, 101);
// ::::::::::::::END::::::::::::::

// 4) crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "Los" o "New" altrimenti false

// ::::::::::::::BEGIN::::::::::::::
// const citta = function (nome) {
//   if (nome.startsWith("New") || nome.startsWith("Los")) {
//     return console.log(nome);
//   } else {
//     return console.log(false);
//   }
// };
// citta("Los Bucuresti");
// ::::::::::::::END::::::::::::::

// 5) crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array (che sarà il parametro)

// ::::::::::::::BEGIN::::::::::::::
// const sommaArray = function (numeri) {
//   somma = 0;
//   for (let i = 0; i < numeri.length; i++) {
//     somma += numeri[i];
//   }
//   return console.log(somma);
// };

// sommaArray([1, 2, 76]);
// ::::::::::::::END::::::::::::::

// 6) crea una funzione che controlli he un array NON contenga i numeri 1 o 3. se NON li contiene, ritorna true altirmenti false

// ::::::::::::::BEGIN::::::::::::::
// const arr = [2, 32, 4, 1, 2, 2, 7, 31, 4, 9];
// const checkArray = function (array) {
//   const nr1 = arr.includes(1);
//   const nr2 = arr.includes(3);
//   if (nr1 || nr2) {
//     return console.log(false);
//   } else {
//     return console.log(true);
//   }
// };
// checkArray(arr);
// ::::::::::::::END::::::::::::::

// 7) crea una funzione che ritorni il tipo di angolo i cui gradi vengono passati come parametro:
// meno di 90 -> acuto
// 90-180 -> ottuso
// 90 -> retto
// 180 -> piatto

// ::::::::::::::BEGIN::::::::::::::
// const definisciAngolo = function (gradi) {
//   switch (true) {
//     case gradi < 90:
//       return console.log("Acuto");
//       break;
//     case gradi > 90 && gradi < 180:
//       return console.log("Angolo Ottuso");
//       break;
//     case gradi === 90:
//       return console.log("Angolo Retto");
//       break;
//     case gradi === 180:
//       return console.log("Angolo Piatto");
//       break;
//     default:
//       return console.log("Ritenta e sarai più fortunato");
//   }
// };

// definisciAngolo(325);
// ::::::::::::::END::::::::::::::

// 8) crea una funzione che crei acronimo da partire da uan frase. es: Fabbrica Italiana Automobili Torino -> FIAT

// ::::::::::::::BEGIN::::::::::::::
const acronimoDaStringa = function (stringa) {
  let parole;
  let acronimo;
  for (let i = 0; i < stringa.length; i++) {
    parole = stringa.split(" ");
    acronimo += parole[i].charAt(0);
  }
  return console.log(acronimo);
};

acronimoDaStringa("ciao stronzo");
// ::::::::::::::END::::::::::::::

//:::::::::::::::::::::: Esercizi extra :::::::::::::::::::::::::::::::
// NOTA: tutti gli esercizi devono essere svolti usando le funzioni
// 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.
// 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.
// 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
// Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].
// 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.
// 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981
// 6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.
// Es.
// X = 2
// '# '
// '##'
// X = 3
// '# '
// '## '
// '###'
// 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”
// 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
// Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
// array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]
// 9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
// Es.
// X = 3
// ' # '
// ' ### '
// '#####'
// 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
// Es. N = 2
// [[1, 2],[4, 3]]
// N = 3
// [[1, 2, 3],[8, 9, 4],[7, 6, 5]]
// N = 4
// [[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]
