// import statements

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('.snackbar-trigger');
button.addEventListener('click', () => {
    snackbar.show("A curabitur duis torquent leo");
});