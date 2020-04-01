$(document).ready(function(){

    var recommend_rotate=0;
    var owl_recommend = $('.owl-carousel.recommend');
    $('.hotkeyword').owlCarousel({
        stagePadding: 50,
        margin:10,
        nav:true,
        dots:false,
        responsiveClass:true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            100:{
                items:3,
                nav:false
            },
            200:{
                items:5,
                nav:true,
            }
        }
    })

    $('.todaybest').owlCarousel({
        loop:true,
        stagePadding: 0,
        margin:10,
        nav:true,
        dots:false,
        responsiveClass:true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            650:{
                items:4
            },
        }
    })

    $('.recommend').owlCarousel({
        stagePadding: 0,
        margin:10,
        nav:false,
        dots:true,
        responsiveClass:true,
        dotsContainer: '#carousel-custom-dots',
        responsive:{
            0:{
                items:1
            },
            650:{
                items:4
            },
        }
    })

    $('.owl-dot').click(function () {
        owl_recommend.trigger('to.owl.carousel', [$(this).index(), 300]);
        switch($(this).index()){
            case 0:
                $('.recommend-bar').addClass("rec1");
                $('.recommend-bar').removeClass("rec2");
                $('.recommend-bar').removeClass("rec3");
                break;
            case 1:
                $('.recommend-bar').removeClass("rec1");
                $('.recommend-bar').addClass("rec2");
                $('.recommend-bar').removeClass("rec3");
                break;
            case 2:
                $('.recommend-bar').removeClass("rec1");
                $('.recommend-bar').removeClass("rec2");
                $('.recommend-bar').addClass("rec3");
                break;
            default: break;
        }
    });
});