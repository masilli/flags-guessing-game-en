const tableBody = document.querySelector("#countriesTable tbody");

// Fetch the JSON file
fetch('./js/countries.json')
  .then(response => response.json()) // Parse the JSON response
  .then(countries => {
    let i = 1;
    countries.forEach((country) => {
      // Add an if statement to filter out non-independent countries
      //if (country.independent) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${i}</td>
            <td><img src='${country.flag1x1}' height='64px' style='border-radius:32px'></td>
            <td>${country.countryName}</td>
            <td>${country.countryNamePt}</td>
            <td>${country.capitalNamePt}</td>
            <td>${country.continentNamePt}</td>
          `;
        tableBody.appendChild(row);
        i++;
      //}
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

//credits attribution
//<a href="https://www.flaticon.com/free-icons/africa" title="africa icons">Africa icons created by Kalashnyk - Flaticon</a>
