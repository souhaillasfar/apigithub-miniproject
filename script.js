const toggleTheme = () => {
    const body = document.body;
    const checkbox = document.getElementById('sun');
    
    
    if (checkbox.checked) {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
};