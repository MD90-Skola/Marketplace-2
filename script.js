document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const tableBody = document.querySelector("tbody");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Förhindra att sidan laddas om vid submit

    // Hämta värden från formuläret
    const namn = document.getElementById("fn").value;
    const yrke = document.getElementById("ln").value;
    const email = document.getElementById("email").value;
    const paket = document.getElementById("course").value;
    // Om du har ett annat select-element för betalningsmetod, se till att det har ett unikt namn eller id
    const betalMetod = document.getElementById("betalMetod").value; 
    const ovrigt = document.getElementById("description").value;

    // Skapa en ny rad i tabellen
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
      <td>${namn}</td>
      <td>${yrke}</td>
      <td>${email}</td>
      <td>${paket}</td>
      <td>${betalMetod}</td>
      <td>${ovrigt}</td>
      <td><button class="delete-btn">❌</button></td>
    `;

    // Lägg till raden i tabellen
    tableBody.appendChild(newRow);

    // Rensa formuläret efter inmatning
    form.reset();

    // Lägg till funktion för att ta bort rad
    newRow.querySelector(".delete-btn").addEventListener("click", function () {
      newRow.remove();
    });
  });
});