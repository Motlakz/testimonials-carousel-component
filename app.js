document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const modeButton = document.querySelector('.mode');
    const moonIcon = document.querySelector('.moon');
    const modeIcon = document.querySelector('.mode');

    // When mode button is clicked, toggle the light class which initiates light and dark colors
    modeButton.addEventListener('click', function () {
        body.classList.toggle('light');
        moonIcon.classList.toggle('sun');
        modeIcon.classList.toggle('day');
    });
});
