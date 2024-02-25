
// Function to scroll the page automatically
function autoScroll() {
    // Set the scroll speed (you can adjust this value)
    var scrollSpeed = 1;

    // Scroll down by scrollSpeed pixels every 50 milliseconds
    var scrollInterval = setInterval(function () {
        window.scrollBy(0, scrollSpeed);

        // If the bottom of the page is reached, stop scrolling
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            clearInterval(scrollInterval);
        }
    }, 50);
}

// Call the autoScroll function when the page loads
window.onload = function () {
    autoScroll();
};