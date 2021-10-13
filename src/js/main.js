window.addEventListener('scroll', function() {
    const header = document.getElementById('navbar');
    header.classList.toggle('sticky', window.scrollY > 0);
});

/* $(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    })
}); */

