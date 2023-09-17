// Write your code here!
// Remove the 'main' element with the ID 'main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element with the text "YOUR-NAME is the champion"
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace 'YOUR-NAME' with an actual name

// Append the new <h1> element to the document body
document.body.appendChild(newHeader);
