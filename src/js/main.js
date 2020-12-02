$(document).ready(function(){
    //Карусель

    $(".owl-carousel").owlCarousel({
        autoHeight: true,
        items: 1,
        loop: true,
        dots: false,
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel();
// Go to the next item
    $('.customNext').click(function() {
        owl.trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.customPrev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })



    //Табы

    $('ul.catalog-tabs').on('click', 'li:not(.catalog-tabs__tab_active)', function() {
        $(this)
            .addClass('catalog-tabs__tab_active').siblings().removeClass('catalog-tabs__tab_active')
            .closest('div.container').find('div.catalog-content').removeClass('catalog-content_active')
            .eq($(this).index()).addClass('catalog-content_active');
    });


    // more button

     $('.catalog-content-card__moreButton').each(function (i) {
         $(this).on('click', function (e) {
             e.preventDefault()
             $('.catalog-content-card__item').eq(i).addClass('catalog-content-card__item_active')
             $('.catalog-content-card__about').eq(i).addClass('catalog-content-card__about_active')
         })
     })

    // back button

    $('.catalog-content-card__backButton').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault()
            $('.catalog-content-card__item').eq(i).removeClass('catalog-content-card__item_active')
            $('.catalog-content-card__about').eq(i).removeClass('catalog-content-card__about_active')
        })
    })

    var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [42.878928, 74.595199],
            zoom: 17
        });
        var myIcon = DG.icon({
            iconUrl: 'src/image/footer/icon.png',
            iconSize: [40, 45],
        })

        DG.marker([42.879104, 74.595395], {icon: myIcon}).addTo(map);
    });

    $('.header-menu-call__button, .home__button').on('click', function () {
        $('.overlay, .popup, .consult').fadeIn('slow')
    });

    $('.popup__close').on('click', function () {
        $('.overlay, .popup, .thanks, .consult, .buy-form').fadeOut('slow')
    });

    $('.consultation-form__btn').on('click',function () {
        $('.overlay, .popup, .thanks').fadeIn('slow')
        $('.consult').fadeOut();
    });

    $('.catalog-content-card__buyButton').each(function (i) {
        $(this).on('click', function () {
            $('.buy-form .buy-form__subtitle').text($('.catalog-content-card__title').eq(i).text())
            $('.overlay, .popup, .buy-form').fadeIn('slow')
        })

    })
});
