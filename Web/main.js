var myMainDiv = document.getElementById('main'),
    
    // Create Div Element
    myNewElement = document.createElement('div'), 
    
    // Create Text Node
    myText = document.createTextNode('Hello From Javascript');


// Append Text to the New Element
myNewElement.appendChild(myText); 

// Inserting the New Element to My Main Div
myMainDiv.insertBefore(myNewElement, myMainDiv.firstElementChild); 