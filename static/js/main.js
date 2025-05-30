  $(document).ready(function () {
  
    // service slider
    $(".service__slider").slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });
  
    // skill count
  
    // $(".skill__progress").waypoint(
    //   function () {
    //     $(".progress-value span").each(function () {
    //       $(this)
    //         .prop("Counter", 0)
    //         .animate(
    //           {
    //             Counter: $(this).text(),
    //           },
    //           {
    //             duration: 3000,
    //             easing: "swing",
    //             step: function (now) {
    //               $(this).text(Math.ceil(now));
    //             },
    //           }
    //         );
    //     });
    //     $(".skill__progress_item").addClass("js-animation");
    //     this.destroy();
    //   },
    //   { offset: "80%" }
    // );
  
    // Testimonial slider
    $(".testimonial__slider").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    });
  
    // Modal Popup
    $(".popup-button").magnificPopup({
      type: "iframe",
      iframe: {
        patterns: {
          youtube: {
            index: "youtube.com/",
            id: "v=",
            src: "//www.youtube.com/embed/tgbNymZ7vqY",
          },
        },
      },
    });
  
    $(".portfolio-item-grid").masonry({
      // options
      itemSelector: ".portfolio-item",
      columnWidth: 200,
    });

  
  // G-Map
  /**
   * Created by Kausar on 06/10/2016.
   */
  window.marker = null;
  
  function initialize() {
    var map;
    var lat = $("#map").data("lat");
    var long = $("#map").data("long");
    var mapCenter = new google.maps.LatLng(lat, long);
    var style = [
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#e9e9e9",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#dedede",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#ffffff",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36,
          },
          {
            color: "#333333",
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#f2f2f2",
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#fefefe",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#fefefe",
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
    ];
    var mapOptions = {
      // SET THE CENTER
      center: mapCenter,
      // SET THE MAP STYLE & ZOOM LEVEL
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      // REMOVE ALL THE CONTROLS EXCEPT ZOOM
      zoom: 13,
      panControl: false,
      scrollwheel: false,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      overviewMapControl: false,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
      },
    };
  
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // SET THE MAP TYPE
    var mapType = new google.maps.StyledMapType(style, {
      name: "Grayscale",
    });
    map.mapTypes.set("grey", mapType);
    map.setMapTypeId("grey");
    //CREATE A CUSTOM PIN ICON
    var marker_image = $("#map").data("pin");
    var pinIcon = new google.maps.MarkerImage(
      marker_image,
      null,
      null,
      null,
      new google.maps.Size(25, 34)
    );
    marker = new google.maps.Marker({
      position: mapCenter,
      map: map,
      icon: pinIcon,
      title: "bizcred",
    });
  }
  
  if ($("#map").length > 0) {
    google.maps.event.addDomListener(window, "load", initialize);
  }
})


const hamburger = document.querySelector("nav button");

function processClick(event) {
  event.preventDefault()
  const navbar = document.getElementById("navbarCollapse")
  navbar.classList.toggle("collapse")
}


function processScroll() {
  const navbar = document.querySelector("nav")
  
  if (window.scrollY > 200) {
    navbar.classList.add("nav__color__change")
  } else {
    navbar.classList.remove("nav__color__change")
  }
}

hamburger.onclick = processClick
window.onscroll = processScroll
