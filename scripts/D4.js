/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const areaRettangolo = function (l1, l2) {
  let area = l1 * l2
  console.log(area)
}

areaRettangolo(7, 8)
console.log('')

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  let somma = 0
  if (n1 === n2) {
    somma = (n1 + n2) * 3
  } else {
    somma = n1 + n2
  }
  console.log(somma)
}

crazySum(8, 8)
console.log('')

/* ESERCIZIO 3
Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n1) {
  let diff = 0
  if (n1 > 19) {
    diff = (n1 - 19) * 3
  } else {
    diff = n1 - 19
  }
  console.log(diff)
}

crazyDiff(21)
console.log('')

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true
  } else {
    return false
  }
}

console.log(boundary(400))
console.log('')

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const frase = 'Ciao a tutti, questa è una funzione!'
const fraseEpi = 'EPICODE è fantastica!'

const epify = function (stringa) {
  if (stringa.startsWith('EPICODE')) {
    stringa = stringa
  } else {
    stringa = 'EPICODE' + ' ' + stringa
  }
  console.log(stringa)
}

epify(frase)
console.log('')

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n) {
  if (n % 3 === 0 || n % 7 === 0) {
    console.log("E' un multiplo di 3 o 7")
  } else {
    console.log('Non è un multiplo di 3 o 7')
  }
}

check3and7(42)
console.log('')

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const parola = 'Incredibile'

const reverseString = function (stringa) {
  let parolaReversata = stringa.split('').reverse().join('')
  console.log(parolaReversata)
}

reverseString(parola)
console.log('')

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (stringa) {}

upperFirst()
console.log('')

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const fraseTagliata = 'Incredibile come sia difficile modificare le stringhe'

const cutString = function (stringa) {
  const cut = stringa.slice(1, -1)
  console.log(cut)
}

cutString(fraseTagliata)
console.log('')

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let elementiArray = 4

const giveMeRandom = function (n) {
  let random = 0
  let insiemeRandom = []
  for (let i = 0; i < n; i++) {
    random = Math.floor(Math.random() * 11)
    insiemeRandom.push(random)
  }
  console.log(random)
  console.log(insiemeRandom)
}

giveMeRandom(elementiArray)
console.log('')
