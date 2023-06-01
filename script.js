const graphs = [
    'images/Screen Shot 2023-05-29 at 6.23.03 PM.png',
    'images/Screen Shot 2023-05-29 at 6.23.20 PM.png',
    'images/Screen Shot 2023-05-29 at 6.23.48 PM.png',
    'images/Screen Shot 2023-05-29 at 6.24.00 PM.png'
];

let dropdownButton = document.querySelector(".dropbtn");
let dropdownContent = document.querySelector(".dropdown-content");
let graph = document.querySelector(".graph");
let selection = document.querySelector(".selection");
let allButton = document.querySelector("#all");
let year = document.querySelector("#year");
let earlyEdKPIone = document.querySelector(".earlyed-kpi-1");
let k12KPI = document.querySelector(".k12-kpi");
let postsecondaryKPI = document.querySelector(".postsecondary-kpi");
let employeeCredKPI = document.querySelector(".employeecred-kpi");

dropbtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
  });

function toggleDropdown(element) {
    console.log("dropdown");
    let dropdownContent = element.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        
    } else {
        dropdownContent.style.display = "block";
        // dropdownContent.style.animation = "slide reverse 1s ease";
    }
}

function displayGraph() {
    console.log("display graph");
  
    graph.innerHTML = ""; // Clear the graph container
  
    const figureElement = document.createElement('figure');
  
    const imgElement = document.createElement('img');
    imgElement.src = graphs[1]; // Set the image URL based on the desired graph
  
    const figcaptionElement = document.createElement('figcaption');
    figcaptionElement.textContent = "Caption or description for the image";
  
    figureElement.appendChild(imgElement); // Append the image element to the figure element
    figureElement.appendChild(figcaptionElement); // Append the figcaption element to the figure element
  
    graph.appendChild(figureElement); // Append the figure element to the graph container
  }
  
  
  
//  function displayAll() {
//     allButton.addEventListener("click", displayGraph);

//     for (let i = 0 ; i < graphs.length ; i++) {
//         graphContainer.innerHTML += graphs[i];
//     }
//  }

