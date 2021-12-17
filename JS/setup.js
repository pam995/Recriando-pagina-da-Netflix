$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 5,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:5
        },
        1000:{
            items:7
        }
    }
})

function trailer(){
    window.open("https://www.youtube.com/watch?v=H22gc1V3HtY");
}

function info() {
    alert("Os animais mais fofos do mundo você consegue ver aqui!");
}