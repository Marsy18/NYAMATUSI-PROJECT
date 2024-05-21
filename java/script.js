document.querySelector('.scroll-arrow').addEventListener('click', function(event){
    event.preventDefault();
    const footer = document.querySelector('#footer');
    footer.scrollIntoView({ behavior: 'smooth'});
});
