document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    modeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            modeToggle.textContent = '🌙';
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            modeToggle.textContent = '🌞';
        }
    });
});
