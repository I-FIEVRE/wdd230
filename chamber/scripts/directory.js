const url = 'https://raw.githubusercontent.com/I-FIEVRE/wdd230/main/chamber/json/data.json';

async function getDirectoryData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayGrid(data.businesses);
    displayList(data.businesses);
  }

  getDirectoryData(url);

  const displayGrid = (businesses) => {
    const gridD = document.querySelector('div.gridD');
    businesses.forEach((business) => {
      let card = document.createElement('section');
      let divi1 = document.createElement('div');
      let divi2 = document.createElement('div');
      let h3 = document.createElement('h3');
      let image = document.createElement('img');
      let phone = document.createElement('p');
      let address = document.createElement('p');
      let website = document.createElement('p');
      let membership = document.createElement('p');
      h3.textContent = `${business.name}`;
      image.setAttribute('src', business.image);
      image.setAttribute('alt', `Image of ${business.name}`);
      image.setAttribute('loading', 'lazy');
      phone.textContent = `${business.phone}`;
      address.textContent = `${business.address}`;
      website.textContent = `${website.website}`;
      membership.textContent = `${business.membership}`;
      card.appendChild(h3);
      card.appendChild(image);
      card.appendChild(divi1);
      divi1.appendChild(phone);
      divi1.appendChild(address);
      divi1.appendChild(website);
      card.appendChild(divi2);
      divi2.appendChild(membership);
      gridD.appendChild(card);
    })
  } 

  const displayList = (businesses) => {
    const listD = document.querySelector('div.listD');
    businesses.forEach((business) => {
      let card = document.createElement('section');
      let h3 = document.createElement('h3');
      let phone = document.createElement('p');
      let address = document.createElement('p');
      let website = document.createElement('p');
      let membership = document.createElement('p');
      h3.textContent = `${business.name}`;
      phone.textContent = `${business.phone}`;
      address.textContent = `${business.address}`;
      website.textContent = `${website.website}`;
      membership.textContent = `${business.membership}`;
      card.appendChild(h3);
      card.appendChild(phone);
      card.appendChild(address);
      card.appendChild(website);
      card.appendChild(membership);
      listD.appendChild(card);
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
      if ((li_view == 'gridD')) {
        document.querySelector('.' + li_view).style.display = 'grid';
      } else {
        document.querySelector('.' + li_view).style.display = 'block';
      }
        
  })
})