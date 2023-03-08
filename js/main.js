// Step 1: Select the element that the users going to click on to show the menu
const btn = document.querySelector('.toggle-btn');

// Step 2: add a click event to the button
btn.addEventListener('click', function(){
    // when the button is clicked, add that special class name to the hidden element
    document.querySelector('nav').classList.toggle('show-nav');
});