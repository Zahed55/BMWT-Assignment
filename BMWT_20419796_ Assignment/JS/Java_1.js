/* Using_Local_storage_to_set_dark_theme_on_Document */
 if (typeof localStorage == 'undefined') {
    console.log('This browser does not support local storage');
}

/* DOM model */
var darkMode = localStorage.getItem('darkMode');
var btnTheme = document.querySelector('.container__widget--button');

const darkModeEnabled = () => {
    /* change theme */
    document.body.classList.add('theme-dark');
    /* set to local storage */
    localStorage.setItem('darkMode', 'enabled');
};

const darkModeDisabled = () => {
    
    document.body.classList.remove('theme-dark');
    
    localStorage.setItem('darkMode', null);
};

/* Setting dark mode */
if (darkMode === 'enabled') {
    darkModeEnabled();
}

btnTheme.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        darkModeEnabled();
    } else {
        darkModeDisabled();
    }
});

