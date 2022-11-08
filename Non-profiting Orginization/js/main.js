console.log("hello");
$(window).scroll( function(){
if($(this).scrollTop() > 100){
  $(".up").show();
  $(".navbar").addClass("fixed-top");
}
else{
  $(".up").hide();
  $(".navbar").removeClass("fixed-top");
}
});

$(".up").click(function(){
  $(window).scrollTop(0)
})





var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
    var i;
    var slides = $(".hisSlides");
    var dots = $(".dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }

    <script>
      (function(d,t) {
        var BASE_URL="https://omni.diyochat.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.diyochatSDK.run({
            websiteToken: 'AHA2XEgL9Njf1yfG4exhfWmP',
            baseUrl: BASE_URL
          })
        }
      })(document,"script");
    </script>
    
