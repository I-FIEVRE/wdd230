const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
    displayUtah(data.prophets);
    displayNonUtah(data.prophets);
  }

  getProphetData(url);

const displayProphets = (prophets) => {
  const cards = document.querySelector('div.cards');
  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let divi = document.createElement('div');
    let sp1 = document.createElement('span');
    let sp2 = document.createElement('span');
    let h2 = document.createElement('h2');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    let portrait = document.createElement('img');
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    sp1.textContent = ` ${prophet.birthdate}`;
    birthDate.textContent = `Date of Birth:`;
    sp2.textContent = ` ${prophet.birthplace}`;
    birthPlace.textContent = `Place of Birth:`;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    card.appendChild(h2);
    card.appendChild(divi);
    divi.appendChild(birthDate);
    birthDate.appendChild(sp1);
    divi.appendChild(birthPlace);
    birthPlace.appendChild(sp2);
    card.appendChild(portrait);
    cards.appendChild(card);
  })
}

function displayUtah(prophets) {
  const utah = document.querySelector('div.utah');
  prophets.forEach((prophet) => {  
    if (prophet.birthplace == "Utah") {
      let card = document.createElement('section');
      let divi = document.createElement('div');
      let sp1 = document.createElement('span');
      let sp2 = document.createElement('span');
      let h2 = document.createElement('h2');
      let birthDate = document.createElement('p');
      let birthPlace = document.createElement('p');
      let portrait = document.createElement('img');
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      sp1.textContent = ` ${prophet.birthdate}`;
      birthDate.textContent = `Date of Birth:`;
      sp2.textContent = ` ${prophet.birthplace}`;
      birthPlace.textContent = `Place of Birth:`;
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      card.appendChild(h2);
      card.appendChild(divi);
      divi.appendChild(birthDate);
      birthDate.appendChild(sp1);
      divi.appendChild(birthPlace);
      birthPlace.appendChild(sp2);
      card.appendChild(portrait);
      utah.appendChild(card);
    }  
  })
} 

function displayNonUtah(prophets) {
  const nUtah = document.querySelector('div.nUtah');
  prophets.forEach((prophet) => { 
  if (prophet.birthplace != "Utah") {
    let card = document.createElement('section');
    let divi = document.createElement('div');
    let sp1 = document.createElement('span');
    let sp2 = document.createElement('span');
    let h2 = document.createElement('h2');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    let portrait = document.createElement('img');
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    sp1.textContent = ` ${prophet.birthdate}`;
    birthDate.textContent = `Date of Birth:`;
    sp2.textContent = ` ${prophet.birthplace}`;
    birthPlace.textContent = `Place of Birth:`;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    card.appendChild(h2);
    card.appendChild(divi);
    divi.appendChild(birthDate);
    birthDate.appendChild(sp1);
    divi.appendChild(birthPlace);
    birthPlace.appendChild(sp2);
    card.appendChild(portrait);
    nUtah.appendChild(card);
  }  
})     
}  

let viewsButtons = document.querySelectorAll('.links ul li');
let views = document.querySelectorAll('.view-div');

viewsButtons.forEach((link) => {
  link.addEventListener('click', () => {
      viewsButtons.forEach((item) => {
          item.classList.remove('active');
      })
      link.classList.add('active');
      let li_view = link.getAttribute('data-view');
      views.forEach((view) => {
          view.style.display = 'none';
      }) 
      document.querySelector('.' + li_view).style.display = 'grid';  
  })
})
