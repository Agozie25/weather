const apiKey = "6f81f115003edc72500ba4e34337d8f5"
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector('.input-Part input')
const searchBtn = document.querySelector('.input-Part button')
const error = document.querySelector('.error')

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status === 404){
        error.style.display= 'block'
        document.querySelector('.weather-part').style.display = 'none'
    }else{
        let data = await response.json()
        // console.log(data)
    
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.celcius').innerHTML = Math.round(data.main.temp)+'ºC'
        document.querySelector('.humid').innerHTML = data.main.humidity + '%'
        document.querySelector('.speed').innerHTML = data.wind.speed + ' km/h'
        document.querySelector('.weather-part').style.display = 'block'
        error.style.display= 'none'

    }

}


searchBtn.addEventListener('click',()=>{

    checkweather(searchBox.value)  
    // searchBox.value=''
})