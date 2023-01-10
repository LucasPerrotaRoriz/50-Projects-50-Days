const icon = document.querySelector('#icon')
const search = document.querySelector('.input')
icon.addEventListener('click', function(e) {
    search.classList.toggle('shrink');
})