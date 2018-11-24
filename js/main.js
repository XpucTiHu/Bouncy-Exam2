/* ISOTOPE AND MASONRY */

function useIsotope(event) {

    // init Isotope
    let isotopeGrid = new Isotope( '#ba-portfolio-items', {
        itemSelector: '.portfolio-pictures__item',
        masonry: {
            // use element for option
            columnWidth: '.portfolio-pictures__item',
            itemSelector: '.portfolio-pictures__item',
            transitionDuration: '0.5s',
            gutter: 8,
            horizontalOrder: true,
        }
    });

    let applyFilterFromLink = (linkObject) => {
        let filterValue = linkObject.dataset.filter;
        isotopeGrid.arrange({ filter: filterValue });
    };

    let filterGrid = function( event ) {
        event.preventDefault();
        applyFilterFromLink(this);
        let activeBtn = document.querySelector('.ba-active-filter');
        if (activeBtn) {
            activeBtn.classList.remove('ba-active-filter');
        }
        this.classList.add('ba-active-filter');
    };

    document.querySelectorAll('.ba-portfolio__filter').forEach(filterBtn => {
        filterBtn.addEventListener( 'click', filterGrid);
    });

    let activeBtn = document.querySelector('.ba-active-filter');
    applyFilterFromLink(activeBtn);
}
document.addEventListener('DOMContentLoaded', useIsotope);

/* SLICK SLIDER */

$(document).ready(function(){
    $('.ba-slider').slick({
        arrows: false,
        dots: true,
    });
});

$(document).ready(function(){
    $('.ba-slider-testimonials').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });
});

/* GOOGLE MAP */

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.9227306, lng: 24.7082023},
        zoom: 17,
        scrollwheel: false
    });

    var image = 'img/beetroot.png';
    var marker = new google.maps.Marker({
        position: {lat: 48.9227306, lng: 24.7082023},
        map: map,
        icon: image
    });

    var infowindow = new google.maps.InfoWindow({
        content: 'Beetroot Academy Ivano-Frankivsk'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
document.addEventListener('DOMContentLoaded', initMap);