window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#000';
       
    } else {
        navbar.style.backgroundColor = '#171717';
        
    }
});


