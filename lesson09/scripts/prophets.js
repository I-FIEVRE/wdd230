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
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let birthDate = document.createElement('p');
      let birthPlace = document.createElement('p');

      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      birthDate.textcontent = `Date of Birth: ${prophet.birthdate}`;
      birthPlace.textcontent = `Place of Birth: ${prophet.birthplace}`;

      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      card.appendChild(h2);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      card.appendChild(portrait);
      cards.appendChild(card);
    })
}

