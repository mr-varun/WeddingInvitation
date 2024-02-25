// Function to detect the device type
function detectDevice() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return isMobile ? 'mobile' : 'desktop';
}

// Function to redirect to the appropriate version of the webpage based on device
function redirectToCorrectVersion() {
    var deviceType = detectDevice();
    if (deviceType === 'mobile') {
        // Redirect to the desktop version of the webpage
        window.location.href = "desktop_version.html";
    }
}

// Call the redirectToCorrectVersion function when the page loads
window.onload = function () {
    redirectToCorrectVersion();
};