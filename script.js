const countriesContainer = document.querySelector('.countries');
const btn = document.querySelector('button');
const input = document.querySelector('input');

renderCountry = function (data) {
  const html = `<article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.capital}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} Milion</p>
    <p class="country__row"><span>📐</span>${data.area.toLocaleString('en-US')} &#x33A1;</p></p>
    <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
    <p class="country__row"><span>💰</span> </p> 
  </div>
</article>`
  console.log(data);
  countriesContainer.insertAdjacentHTML('afterbegin', html);


  countriesContainer.style.opacity = 1;

};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
      count++;
    })
}
btn.addEventListener('click', function () {
  let country = input.value;
  getCountryData(country);
  input.value = '';
});
