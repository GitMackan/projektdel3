"use strict"

// Variabler
let studiesEl = document.getElementById("studies-container");
let jobsEl = document.getElementById("jobs-container");
let sitesEl = document.getElementById("sites-container");

// Händelsehanterare
window.addEventListener('load', getStudies);
window.addEventListener('load', getJobs);
window.addEventListener('load', getSites);

/**
 * Funktion för att hämta studier
 */
function getStudies () {
    studiesEl.innerHTML = "";

    fetch('http://localhost/projectapi/studies.php')
    .then(response => response.json())
    .then(data => {
        data.forEach(studie => {
            studiesEl.innerHTML += 
            `<div class="studie-card">
                <h3>Skola: </h3><p>${studie.uni}</p>
                <h3>Utbildning: </h3><p>${studie.edu}</p>
                <h3>Start: </h3><p>${studie.start}</p>
                <h3>Slut: </h3><p>${studie.end}</p>
            </div>`
        })
    })
}

/**
 * Funktion för att hämta jobb
 */
function getJobs () {
    jobsEl.innerHTML = "";

    fetch('http://localhost/projectapi/jobs.php')
    .then(response => response.json())
    .then(data => {
        data.forEach(job => {
            jobsEl.innerHTML += 
            `<div class="job-card">
                <h3>Arbetsplats: </h3><p>${job.job}</p>
                <h3>Roll: </h3><p>${job.title}</p>
                <h3>Start: </h3><p>${job.start}</p>
                <h3>Slut: </h3><p>${job.end}</p>
            </div>`
        })
    })
}

/**
 * Funktion för att hämta projekt
 */
function getSites () {
    jobsEl.innerHTML = "";

    fetch('http://localhost/projectapi/sites.php')
    .then(response => response.json())
    .then(data => {
        data.forEach(site => {
            sitesEl.innerHTML += 
            `<div class="sites-card">
                <h3>Webbsida: </h3><p>${site.title}</p>
                <h3>Länk till sida: </h3><p><a href="${site.url}">Länk</a></p>
                <h3>Beskrivning: </h3><p>${site.info}</p>
            </div>`
        })
    })
}