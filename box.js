document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Förhindrar att formuläret skickas och sidan laddas om

    // Hämta värden från formuläret
    var namn = document.getElementById('fn').value;
    var yrke = document.getElementById('ln').value;
    var email = document.getElementById('email').value;
    var paket = document.querySelector('#course[name="course"]').value; // Uppdaterad för att välja rätt element
    var betalMetod = document.querySelectorAll('#course[name="course"]')[1].value; // Uppdaterad för att välja rätt element
    var frågor = document.getElementById('description').value;

    // Skapa en textsträng med all information
    var resultText = `
        <p>Namn: ${namn}</p>
        <p>Yrke: ${yrke}</p>
        <p>E-Post: ${email}</p>
        <p>Paket: ${paket}</p>
        <p>Betal Metod: ${betalMetod}</p>
        <p>Frågor: ${frågor}</p>
    `;

    // Visa resultatet i 'result'-diven
    document.getElementById('result').innerHTML = resultText;
});