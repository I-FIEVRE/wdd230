const urlj = 'json/data.json';


async function getDirectoryData(urlj) {
    const response = await fetch(urlj);
    const data = await response.json();
    display1(data.businesses);
  }  

const display1 = (businesses) => {
  let n1 = 0;
  let n2 = 0;
  let n3 = 0;
  let nb1 = Math.floor(Math.random()*9) + 1; 
  //const result = JSON.parse(businesses);`${businesses[nb1 + 1].membership}`
 /* while (`${businesses[nb1 + 1].membership}` != "GOLD") {
     nb1 = Math.floor(Math.random()*9) + 1;
  };*/
  n1 = nb1;
  
  let nb2 = Math.floor(Math.random()*9) + 1; 

  //while ((`${businesses[nb2 + 1].membership}` != 'GOLD') || nb2 == n1) {
    while (nb2 == n1) {
    nb2 = Math.floor(Math.random()*9) + 1;
  };
  n2 = nb2;

  let nb3 = Math.floor(Math.random()*9) + 1; 
  //while ((`${businesses[nb3 + 1].membership}` != 'SILVER') || (nb3 == n1 || nb3 == n2)) {
    while ( nb3 == n1 || nb3 == n2) {
    nb3 = Math.floor(Math.random()*9) + 1;
  };
  n3 = nb3;

  createSpotlight(businesses, n1, 'spotlight-1');
  createSpotlight(businesses, n2, 'spotlight-2');
  createSpotlight(businesses, n3, 'spotlight-3');

}
const createSpotlight = (businesses, n, spotlight) => {
  const spotlightC = document.querySelector('article.' + spotlight);
    let h2 = document.createElement('h2');
    let image = document.createElement('img');
    let phone = document.createElement('p');
    let address = document.createElement('p');
    let website = document.createElement('a');
    //let divi = document.createElement('div');
    let membership = document.createElement('p');
    h2.textContent = `${businesses[n + 1].name}`;
    image.setAttribute('src', businesses[n + 1].image);
    image.setAttribute('alt', `Image of ${businesses[n].name}`);
    image.setAttribute('loading', 'lazy');
    phone.textContent = `${businesses[n + 1].phone}`;
    address.textContent = `${businesses[n + 1].address}`;
    website.setAttribute('href', businesses[n + 1].website);
    website.setAttribute('target', `_blank`);
    website.textContent = `Website`;
    membership.textContent = `${businesses[n + 1].membership}`;
    spotlightC.appendChild(h2);
    spotlightC.appendChild(image);
    spotlightC.appendChild(phone);
    spotlightC.appendChild(address);
    spotlightC.appendChild(website);
    spotlightC.appendChild(membership);
    //spotlight1.appendChild(divi);
    //divi.appendChild(membership);  
} 


getDirectoryData(urlj);


