const weather = async (city) =>{
    // const req = new XMLHttpRequest()
    // req.get()
    let weather;
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=<your id after you login>`)
  .then(response => response.json())
  .then(data => { weather = data});
  return weather;
}

const form = document.querySelector('form')
const city = document.querySelector('input')
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(weather(city.value).then(data=> data))
})
