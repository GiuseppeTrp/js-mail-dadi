
function foundEmail() {
    //  valore dell'indirizzo email dall'input
    const userEmail = document.getElementById("email-input").value;

    // Array di indirizzi email nel database
    const emailArray= [
     'alice@gimail.com',
     'bob@gimail.com',
     'charlie@gimail.com',
     'david@gimail.com',
     'emma@gimail.com',
     'frank@gimail.com',
     'grace@gimail.com',
     'henry@gimail.com',
     'isabel@gimail.com',
     'jack@gimail.com',
     'kate@gimail.com',
     'leo@gimail.com',
     'maya@gimail.com',
     'nathan@gimail.com',
     'olivia@gimail.com',
     'peter@gimail.com',
     'quinn@gimail.com',
     'rachel@gimail.com',
     'sam@gimail.com',
     'tara@gimail.com',
     'ulysses@gimail.com',
     'violet@gimail.com',
     'winston@gimail.com',
     'xena@gimail.com',
     'zara@gimail.com',
     'adam@gimail.com',
     'bella@gimail.com',
     'carter@gimail.com',
     'daisy@gimail.com',
    'elijah@gimail.com',
    'fiona@gimail.com',
     'gavin@gimail.com',
     'hannah@gimail.com',
     'ian@gimail.com',
     'jenna@gimail.com',
     'kevin@gimail.com',
     'lily@gimail.com',
     'mason@gimail.com',
     'nora@gimail.com',
     'oliver@gimail.com',
     'pam@gimail.com'
   ];

    // Messaggio di default
    let resultMessage = "<span class='text-danger text-decoration'>La tua mail non è presente nel database!</span>";

    // Iterazione dell'array finchè la lunghezza di i è minore di emailArray
    for (let i = 0; i < emailArray.length; i++) {
        // Controlla se l'indirizzo email di input è uguale all'indirizzo email all'interno dell'array
        if (emailArray[i] === userEmail) {
            // Se c'è una corrispondenza scrive
            resultMessage = "La tua mail è presente nel database!";
            //   Mostra un alert con il messaggio "Accesso consentito"
            alert("Accesso consentito");
            break; // Interrompe il loop quando viene trovata una corrispondenza
        }
    }

    // Aggiorna id result con la variabile rsultMessage
    document.getElementById("result").innerHTML = resultMessage;

    // Se l'indirizzo email non è presente, mostra un alert con il messaggio "Accesso negato"
    if (resultMessage.includes('non')) {
        alert("Accesso negato");
    }
}

// click che aggiorna la funzione
document.getElementById("enter").addEventListener("click", foundEmail);








// const emailArray = [
//     'alice@gimail.com',
//     'bob@gimail.com',
//     'charlie@gimail.com',
//     'david@gimail.com',
//     'emma@gimail.com',
//     'frank@gimail.com',
//     'grace@gimail.com',
//     'henry@gimail.com',
//     'isabel@gimail.com',
//     'jack@gimail.com',
//     'kate@gimail.com',
//     'leo@gimail.com',
//     'maya@gimail.com',
//     'nathan@gimail.com',
//     'olivia@gimail.com',
//     'peter@gimail.com',
//     'quinn@gimail.com',
//     'rachel@gimail.com',
//     'sam@gimail.com',
//     'tara@gimail.com',
//     'ulysses@gimail.com',
//     'violet@gimail.com',
//     'winston@gimail.com',
//     'xena@gimail.com',
//     'yuri@gimail.com',
//     'zara@gimail.com',
//     'adam@gimail.com',
//     'bella@gimail.com',
//     'carter@gimail.com',
//     'daisy@gimail.com',
//     'elijah@gimail.com',
//     'fiona@gimail.com',
//     'gavin@gimail.com',
//     'hannah@gimail.com',
//     'ian@gimail.com',
//     'jenna@gimail.com',
//     'kevin@gimail.com',
//     'lily@gimail.com',
//     'mason@gimail.com',
//     'nora@gimail.com',
//     'oliver@gimail.com',
//     'pam@gimail.com'
//   ];