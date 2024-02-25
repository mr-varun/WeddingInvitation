// Function to change the name when clicked
function changeName() {
    // Get the element containing the name
    var bnameElement = document.getElementById("bname");

    // Check the current name and change it accordingly
    if (bnameElement.textContent.trim() === "RAHUL") {
        bnameElement.textContent = "Varun";
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
document.getElementById("bname").addEventListener("click", changeName);
document.getElementById("gname").addEventListener("click", changeName);
