// Handle element click event
var editorContainer = document.getElementById('editor-container');

function handleElementClick(event) {
    event.preventDefault();
    var elementType = event.target.innerText.toLowerCase();
    var element;

    switch (elementType) {
        case 'text':
            element = createTextElement();
            break;
        case 'image':
            element = createImageElement();
            break;
        case 'video':
            element = createVideoElement();
            break;
        // Add more element creation functions as needed
    }

    if (element) {
        editorContainer.appendChild(element);
    }
}

// Element creation functions
function createTextElement() {
    var textElement = document.createElement('p');
    textElement.innerText = 'This is a text element.';
    return textElement;
}

function createImageElement() {
    var imageElement = document.createElement('img');
    imageElement.src = 'vk.jpeg';
    return imageElement;
}

function createVideoElement() {
    var videoElement = document.createElement('video');
    videoElement.src = 'child.mp4';
    videoElement.controls = true;
    return videoElement;
}


    function saveContent() {
    var editor = document.getElementById('editorContent');
    var content = editor.innerHTML;
    console.log(content);
    alert('Content saved successfully!');
}

// Attach click event listener to elements in the sidebar
var sidebarLinks = document.querySelectorAll('.sidebar a');
for (var i = 0; i < sidebarLinks.length; i++) {
    sidebarLinks[i].addEventListener('click', handleElementClick);
}
