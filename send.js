document.addEventListener('DOMContentLoaded', () => {
    // Hämta referens till formuläret
    const form = document.getElementById('annonsskapare');
  
    // Koppla en "submit"-händelse
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Hindrar sidan från att laddas om
  
      // Hämta värden från fälten
      const namn = document.getElementById('fn').value;
      const yrke = document.getElementById('ln').value;
      const epost = document.getElementById('email').value;
      const paket = document.getElementById('paket').value;
      const betalning = document.getElementById('betalning').value;
      const frågor = document.getElementById('description').value;
  
      // Skapa en ny tabellrad (HTML-sträng)
      const newRow = `
        <tr>
          <td>${namn}</td>
          <td>${yrke}</td>
          <td>${epost}</td>
          <td>${paket}</td>
          <td>${betalning}</td>
          <td>${frågor}</td>
        </tr>
      `;
  
      // Lägg till (append) den nya raden i tabellens <tbody>
      const tbody = document.querySelector('table tbody');
      tbody.innerHTML += newRow;
  
      // Rensa fälten efter submit (valfritt)
      form.reset();
    });
  });