"use strict";
async function buscarClima() {
    const city = document.getElementById('ciudad').value;//carga ciudad desde html
    const apiKey = 'd2fc0fd3708cd53f69ea752efddcb910'; // Dato API  OpenWeatherMap luego de loguearse
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=sp`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            mostrarClima(data);
        } else {
            document.getElementById('clima').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {//captura el error de servidor
        document.getElementById('clima').innerHTML = `<p>Error al cargar datos desde API weather </p>`;
    }
}

function mostrarClima(data) {
    const climaDiv = document.getElementById('clima');
    const temp = data.main.temp;
    const descripcion = data.weather[0].description;
    const humedad = data.main.humidity;

    climaDiv.innerHTML = `
        <h2>Clima en ciudad : ${data.name}</h2>
        <p>Temperatura: ${temp}°C</p>
        <p>Descripcion: ${descripcion}</p>
        <p>Humedad: ${humedad}%</p>
    `;
}

