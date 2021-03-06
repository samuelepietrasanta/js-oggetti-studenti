
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

let studente = {
    'nome' : "Samuele",
    'cognome' : "Pietrasanta",
    'eta': 23,
}

//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (proprieta in studente){
    console.log(studente[proprieta]);
}


//Creare un array di oggetti di studenti. 

let studenti = [

    {
        'nome' : "Marco",
        'cognome' : "Nonloso",
        'eta': 20,

    },
    {
        'nome' : "Luca",
        'cognome' : "Belcognome",
        'eta': 38,

    },
    {
        'nome' : "Sara",
        'cognome' : "Ciao",
        'eta': 34,

    },
    {
        'nome' : "Anna",
        'cognome' : "Qualcosa",
        'eta': 18,
        
    }]


//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (i= 0 ; i<studenti.length ; i++){
    console.log(studenti[i]['nome']);
    console.log(studenti[i]['cognome']);
}



let nuovoStudente = {
    nome : undefined,
    cognome : undefined,
    eta : undefined,
};

//Dare la possibilità all’utente, attraverso 3 prompt(),
//di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

nuovoStudente.nome = prompt("inserisci il nome del nuovo studente");
nuovoStudente.cognome = prompt("inserisci il cognome del nuovo studente");
nuovoStudente.eta = prompt("inserisci l'età del nuovo studente");


studenti.push(nuovoStudente);

console.log(studenti);