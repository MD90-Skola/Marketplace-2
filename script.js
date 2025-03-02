document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tableBody = document.querySelector("tbody");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Förhindra standardformulärinlämning
  
      // Hämta värden från formuläret
      const namn = document.getElementById("fn").value;
      const yrke = document.getElementById("ln").value;
      const email = document.getElementById("email").value;
      const produkt = document.getElementById("course").value;
      const betalMetod = document.querySelector(
        'select[name="course"]:nth-of-type(2)'
      ).value;
      const ovrigt = document.getElementById("description").value;
  
      // Skapa en ny tabellrad
      const newRow = document.createElement("tr");
  
      newRow.innerHTML = `
        <td>${tableBody.rows.length + 1}</td>
        <td>${namn}</td>
        <td>${yrke}</td>
        <td>${produkt}</td>
        <td>${betalMetod}</td>
        <td>${ovrigt}</td>
        <td><button class="delete-btn">❌</button></td>
      `;
  
      // Lägg till raden i tabellen
      tableBody.appendChild(newRow);
  
      // Rensa formuläret
      form.reset();
  
      // Lägg till eventlistener för att ta bort raden
      newRow.querySelector(".delete-btn").addEventListener("click", function () {
        newRow.remove();
      });
    });
  });