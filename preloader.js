document.addEventListener("DOMContentLoaded", function () {
    // Create an iframe element to load the preloader
    var iframe = document.createElement("iframe");
    iframe.src = "preloader.html";
    iframe.frameBorder = 0;
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.zIndex = "9999";

    // Append the iframe to the body
    document.body.appendChild(iframe);

    // Hide the preloader after a certain time (adjust the time as needed)
    setTimeout(function () {
        iframe.style.display = "none";
    }, 5000); // Change 3000 to the desired delay in milliseconds
});