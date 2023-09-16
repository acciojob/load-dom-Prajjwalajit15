 // Add an event listener to the "DOMContentLoaded" event
document.addEventListener("DOMContentLoaded", function () {
    // Function to add text to the body when the DOM is loaded
    function addTextToBody() {
        // Create a new text node with the text "DOM load success"
        var textNode = document.createTextNode("DOM load success");

        // Get the body element
        var body = document.body;

        // Remove any existing children from the body (as per your requirement)
        while (body.firstChild) {
            body.removeChild(body.firstChild);
        }

        // Append the text node to the body
        body.appendChild(textNode);
    }

    // Call the function to add text to the body
    addTextToBody();
});
