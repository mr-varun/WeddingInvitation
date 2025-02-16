// Function to change the name when clicked
function changeName2() {
    // Get the element containing the name
    var bnameElement = document.getElementById("bname");

    // Check the current name and change it accordingly
    if (bnameElement.textContent.trim() === "SHRISHAIL") {
        bnameElement.textContent = "Shrishail Basavannavar (BA B.Ed)";
    } else {
        bnameElement.textContent = "Rahul";
    }

    var gnameElement = document.getElementById("gname");

    // Check the current name and change it accordingly
    if (gnameElement.textContent.trim() === "TANUJA") {
        gnameElement.textContent = "Varsha";
    } else {
        gnameElement.textContent = "Tanuja";
    }
}

// Add click event listener to the name element
document.getElementById("bname2").addEventListener("click", changeName);
document.getElementById("gname2").addEventListener("click", changeName);
