// Write your JavaScript code here!
window.addEventListener("load", function() {   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let missionTarget = document.getElementById('missionTarget');
         let randomPlanetIndex = Math.floor(Math.random() * json.length);
         let planet = json[randomPlanetIndex];
         missionTarget.innerHTML  += `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${planet.name}</li>
            <li>Diameter: ${planet.diameter}</li>
            <li>Star: ${planet.star}</li>
            <li>Distance from Earth: ${planet.distance}</li>
            <li>Number of Moons: ${planet.moons}</li>
         </ol>
         <img src="${planet.image}">`
      });
   });

   let form = document.getElementById('launchForm');
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      //launch status texts
      let shuttleReadyText = `Shuttle is ready for launch`
      let shuttleNotReadyText = `Shuttle not ready for launch`;
      let fuelStatusReadyText = `Fuel level high enough for launch`;
      let fuelStatusNotReadyText = `Fuel level too low for launch`;
      let cargoReadyText = `Cargo mass low enough for launch`;
      let cargoNotReadyText = `Cargo mass too high for launch`;
      //form inputs
      let pilotNameInput = document.querySelector('input[name=pilotName]');
      let copilotNameInput = document.querySelector('input[name=copilotName]');
      let fuelLevelInput = document.querySelector('input[name=fuelLevel]');
      let cargoMassInput = document.querySelector('input[name=cargoMass]');
      //document variables
      let faultyItems = document.getElementById('faultyItems');      
      let launchStatus = document.getElementById('launchStatus');
      let pilotStatus = document.getElementById('pilotStatus');
      let copilotStatus = document.getElementById('copilotStatus');
      let fuelStatus = document.getElementById('fuelStatus');
      let cargoStatus = document.getElementById('cargoStatus');
      //form validation
      let letters = /^[A-Za-z]+$/;
      if (pilotNameInput.value === '' 
      || copilotNameInput.value === ''
      || fuelLevelInput.value === ''
      || cargoMassInput.value === '') {
         alert('All fields are required!');
      } else if (!pilotNameInput.value.match(letters)
      || !copilotNameInput.value.match(letters)
      || isNaN(Number(fuelLevelInput.value))
      || isNaN(Number(cargoMassInput.value))) {
         alert('Please enter valid inputs for all fields!');
      } else {
            //document HTML updates
         faultyItems.style.visibility = 'visible';

         if (fuelLevelInput.value >= 10000 
         && cargoMassInput.value <= 10000) {            
            launchStatus.innerHTML = `${shuttleReadyText}`;
            launchStatus.style.color = 'green';
            pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-Pilot ${copilotNameInput.value} is ready for launch`;
            fuelStatus.innerHTML = `${fuelStatusReadyText}`;
            cargoStatus.innerHTML = `${cargoReadyText}`;
         } 

         if (fuelLevelInput.value >= 10000) {
            fuelStatus.innerHTML = `${fuelStatusReadyText}`;
         }

         if (cargoMassInput.value <= 10000) {
            cargoStatus.innerHTML = `${cargoReadyText}`;
         }
         
         if (fuelLevelInput.value < 10000) {
            launchStatus.innerHTML = `${shuttleNotReadyText}`;
            launchStatus.style.color = `red`;
            fuelStatus.innerHTML = `${fuelStatusNotReadyText}`;
         } 
         
         if (cargoMassInput.value > 10000) {
            launchStatus.innerHTML = `${shuttleNotReadyText}`;
            launchStatus.style.color = 'red';
            cargoStatus.innerHTML = `${cargoNotReadyText}`;     
         }
      }     
         
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
