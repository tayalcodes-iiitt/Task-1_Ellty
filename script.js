document.addEventListener('DOMContentLoaded', () => {
    const checkboxContainers = document.querySelectorAll('.checkbox-container');
    const doneButton = document.getElementById('done-button');

    checkboxContainers.forEach(container => {
        container.addEventListener('mouseover', () => {
            container.classList.add('hover');
        });

        container.addEventListener('mouseout', () => {
            container.classList.remove('hover');
        });

        container.addEventListener('click', () => {
            container.classList.toggle('clicked');
            container.classList.remove('hover');
        });
    });

    doneButton.addEventListener('click', () => {
        const checkedPages = [];
        checkboxContainers.forEach(container => {
            if (container.classList.contains('clicked')) {
                checkedPages.push(container.querySelector('label').innerText.trim());
            }
        });

        console.log('Checked pages:', checkedPages);
    });
});
