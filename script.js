// Write your JavaScript code here!
window.addEventListener("load", function() {   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let missionTarget = document.getElementById('missionTarget');
         let randomPlanetIndex = Math.floor(Math.random() * json.length);
         missionTarget.innerHTML  += `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[randomPlanetIndex].name}</li>
            <li>Diameter: ${json[randomPlanetIndex].diameter}</li>
            <li>Star: ${json[randomPlanetIndex].star}</li>
            <li>Distance from Earth: ${json[randomPlanetIndex].distance}</li>
            <li>Number of Moons: ${json[randomPlanetIndex].moons}</li>
         </ol>
         <img src="${json[randomPlanetIndex].image}">`
      });
   });

   let form = document.getElementById('launchForm');
   form.addEventListener("submit", function(event) {
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
      if (pilotNameInput.value === '' 
      || copilotNameInput.value === ''
      || fuelLevelInput.value === ''
      || cargoMassInput.value === '') {
         alert('All fields are required!');
         faultyItems.style.visibility = 'hidden';
         event.preventDefault();
      }
      let letters = /^[A-Za-z]+$/;
      if (!pilotNameInput.value.match(letters)
      || !copilotNameInput.value.match(letters)
      || isNaN(Number(fuelLevelInput.value))
      || isNaN(Number(cargoMassInput.value))) {
         alert('Please enter valid inputs for all fields!');
         faultyItems.style.visibility = 'hidden';
         event.preventDefault();
      }
      //document HTML updates
      if (fuelLevelInput.value >= 10000 
      && cargoMassInput.value <= 10000 
      && pilotNameInput.value.match(letters) 
      && copilotNameInput.value.match(letters)) {
         faultyItems.style.visibility = 'visible';
         launchStatus.innerHTML = `${shuttleReadyText}`;
         launchStatus.style.color = 'green';
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-Pilot ${copilotNameInput.value} is ready for launch`;
         fuelStatus.innerHTML = `${fuelStatusReadyText}`;
         cargoStatus.innerHTML = `${cargoReadyText}`;
         event.preventDefault();
      } else if (fuelLevelInput.value < 10000) {
         faultyItems.style.visibility = 'visible';
         launchStatus.innerHTML =  `${shuttleNotReadyText}`;
         launchStatus.style.color = `red`;
         fuelStatus.innerHTML = `${fuelStatusNotReadyText}`;
         event.preventDefault();
      } else if (cargoMassInput.value > 10000) {
         faultyItems.style.visibility = 'visible';
         launchStatus.innerHTML =  `${shuttleNotReadyText}`;
         launchStatus.style.color = 'red';
         cargoStatus.innerHTML = `${cargoNotReadyText}`;     
         event.preventDefault(); 
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
