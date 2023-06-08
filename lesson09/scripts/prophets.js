const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
//const cards = document.querySelector('.cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
  }
  
  getProphetData(url);

const displayProphets = (prophets) => {
   const cards = document.querySelector('div.cards');
  
    prophets.forEach((prophet) => {
      
      let card = document.createElement('section');
      let divi = document.createElement('div');
      let h2 = document.createElement('h2');
      let birthDate = document.createElement('p');
      let birthPlace = document.createElement('p');
      let portrait = document.createElement('img');

      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      birthPlace.textContent = `Place of Birth: ${prophet.birthdate}`;
      birthDate.textContent = `Place of Birth: ${prophet.birthplace}`;
  
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      //portrait.setAttribute('width', '306');
      //portrait.setAttribute('height', '396');
  
      card.appendChild(h2);
      card.appendChild(divi);
      divi.appendChild(birthPlace);
      divi.appendChild(birthDate);
      card.appendChild(portrait);
      cards.appendChild(card);
    })
}

