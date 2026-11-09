const toggle_button = document.getElementById('theme-toggle');
const body_element = document.body;
toggle_button.addEventListener('click', function () {
    body_element.classList.toggle('dark-mode');
    console.log('Button clicked');
    if (body_element.classList.contains('dark-mode')) {
        toggle_button.textContent = '☀️ Light Mode';
    }
    else {
        toggle_button.textContent = '🌙 Dark Mode';
    }


});