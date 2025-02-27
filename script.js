// script.js

// Function to load content into a div with id 'content'
function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Event listeners for navigation buttons
document.getElementById('homeBtn').addEventListener('click', () => loadContent('index.html'));
document.getElementById('aboutBtn').addEventListener('click', () => loadContent('about.html'));

// Function to change styles dynamically
function changeStyle(style) {
    document.getElementById('stylesheet').setAttribute('href', style);
}

// Event listener for style change button
document.getElementById('styleBtn').addEventListener('click', () => changeStyle('styles.css'));