// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let elementiArray = 8

const giveMeRandom = function (n) {
  let random = 0
  let insiemeRandom = []
  let somma = 0
  for (let i = 0; i < n; i++) {
    random = Math.floor(Math.random() * 11)
    insiemeRandom.push(random)
    if (random > 5) {
      console.log(random + ' è maggiore di 5')
      somma = somma + random
    } else {
      console.log(random + ' NON è maggiore di 5')
    }
  }
  console.log(random)
  console.log(insiemeRandom)
  console.log(somma)
}

giveMeRandom(elementiArray)
console.log('')

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
  {
    price: 8,
    nameObj: 'Crema corpo',
    id: '3467',
    quantity: 2,
  },
  {
    price: 10,
    nameObj: 'Shampoo',
    id: '7896',
    quantity: 3,
  },
  {
    price: 15,
    nameObj: 'Maschera capelli',
    id: '2573',
    quantity: 3,
  },
  {
    price: 3,
    nameObj: 'Maschera viso',
    id: '0934',
    quantity: 1,
  },
  {
    price: 9,
    nameObj: 'Balsamo',
    id: '7284',
    quantity: 4,
  },
  {
    price: 11,
    nameObj: 'Struccante',
    id: '4572',
    quantity: 1,
  },
]

const shoppingCartTotal = function () {
  let prezzoTot = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    prezzoTot = prezzoTot + shoppingCart[i].price * shoppingCart[i].quantity
  }
  console.log(prezzoTot)
}

shoppingCartTotal()
console.log('')

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const addToShoppingCart = function () {
  let pezziTot = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    pezziTot = pezziTot + shoppingCart[i].quantity
  }
  console.log(pezziTot)
  return pezziTot
}

console.log(addToShoppingCart())
console.log('')

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const maxShoppingCart = function () {
  let prezzi = []
  for (let i = 0; i < shoppingCart.length; i++) {
    prezzi.push(shoppingCart[i].price)
  }
  let prezzoMax = Math.max(...prezzi)
  console.log(prezzi)
  console.log(prezzoMax)
  return prezzoMax
}

console.log(maxShoppingCart())
console.log('')

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const latestShoppingCart = function () {
  return shoppingCart[shoppingCart.length - 1].nameObj
}

console.log(latestShoppingCart())
console.log('')

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const loopUntil = function (x) {
  let count = 0
  do {
    let nRandom = Math.floor(Math.random() * 10)
    if (nRandom > x) {
      count = count + 1
    }
    console.log(nRandom)
  } while (count < 3)
}

loopUntil(5)
console.log('')

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let elencoParole = [
  'Gatto',
  'Cane',
  'Scoiattolo',
  'Elefante',
  'Rana',
  'Giraffa',
]

const longest = function (array) {
  let singoleParole = []
  let paroleScomposte = []
  for (let i = 0; i < array.length; i++) {
    singoleParole.push(array[i].split(' '))
    paroleScomposte.push(singoleParole[i][0].split(''))
    console.log('PAROLE SCOMPOSTE', paroleScomposte)
  }
}

console.log(longest(elencoParole))
console.log('')

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
