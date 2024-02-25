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

// Function to detect device and adjust webpage
function detectDevice() {
    // Check if the user agent contains "Android" to detect Android devices
    var isAndroid = navigator.userAgent.toLowerCase().includes("android");

    if (isAndroid) {
        // Add a class to <html> element to indicate mobile site
        document.documentElement.classList.add("mobile-site");
    }
}

// Call the detectDevice and autoScroll functions when the page loads
window.onload = function () {
    detectDevice();
    autoScroll();
};