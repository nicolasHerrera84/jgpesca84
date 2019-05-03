$(function() {

    /*funciones para el menu principal*/


    /*Inserta y quita la clase ".icono-cerrar" al boton menu*/
    $('#menu-navegacion .navbar-toggler').click(function() {
        $('.boton-menu').toggleClass('icono-cerrar');

    });

    /*Initialize Swiper */

    var swiper = new Swiper('.swiper-container', {
        /*botones de navegacion */
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        speed: 800,
        effect: 'fade',
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 1000
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },


    });
    /*iniciar venobox */
    $('.venobox-video').venobox({
        autoplay: true,
        bgcolor: 'rgbs(255,255,255,0.4)',
        border: '5px',

        closeColor: '#fff',
        overlayClose: true,
        overlayColor: 'rgba(12,60,22,0.83)',
        spinner: 'cube-grid'
    });

})