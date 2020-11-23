// Write your JavaScript code here!
window.addEventListener('load', function() {
   let form = document.getElementById('launchForm');
   form.addEventListener('submit', function(event) {
      let pilotNameInput = document.querySelector('input[name=pilotName]');
      let copilotNameInput = document.querySelector('input[name=copilotName]');
      let fuelLevelInput = document.querySelector('input[name=fuelLevel]');
      let cargoMassInput = document.querySelector('input[name=cargoMass]');
      if (pilotNameInput.value === '' 
      || copilotNameInput.value === ''
      || fuelLevelInput.value === ''
      || cargoMassInput.value === '') {
         alert('All fields are required!');
         event.preventDefault();
      }
      let letters = /^[A-Za-z]+$/;
      if (!pilotNameInput.value.match(letters)
      || !copilotNameInput.value.match(letters)) {
         alert('Please enter valid inputs for pilot names!');
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
