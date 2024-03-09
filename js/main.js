let darkMode = localStorage.getItem('darkMode');
var icon = document.getElementById('icon');

const enableDarkMode = () => {
    document.body.classList.add('dark-theme');

    localStorage.setItem('darkMode', 'enabled');
    icon.classList.add('ri-sun-line');
    icon.classList.remove('ri-moon-line');

};

const disableDarkMode = () => {
    document.body.classList.remove('dark-theme');

    localStorage.setItem('darkMode', null);
    icon.classList.remove('ri-sun-line');
    icon.classList.add('ri-moon-line');

};

if (darkMode === 'enabled') {
    enableDarkMode()
}

icon.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();

    }

});