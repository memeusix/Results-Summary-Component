var cards = document.querySelector('.cards');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Assuming data is the array of objects you provided

        // Loop through each category object
        data.forEach(categoryObject => {
            const category = categoryObject.category;
            const score = categoryObject.score;
            const icon = categoryObject.icon;

            cards.innerHTML += `<div class="card ${category}">
            <div class="left">
              <img src="${icon}" alt="reaction">
              <span>${category}</span>
            </div>
            <div class="right">
              <span>${score}</span>
              <span>/100</span>
            </div>
          </div>`
        });
    })
    .catch(error => console.error(error));




