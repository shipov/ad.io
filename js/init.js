// var myFullpage = new fullpage('#fullpage', {
//   sectionsColor: ['#f4f7fb', '#f4f7fb', '#7BAABE'],

//   anchors: ['firstPage', 'secondPage', 'thirdPage'],
//   menu: '#menu',
//   keyboardScrolling: true,
//   navigation: true,
//   navigationPosition: 'left',
//   css3: true,
//   scrollingSpeed: 700,
//   autoScrolling: true,
//   fitToSection: true,
//   fitToSectionDelay: 800,
//   scrollBar: true,
//   easing: 'easeInOutCubic',
//   easingcss3: 'ease',
//   parallax: true,
//   scrollBar: true,
//   dragAndMove: 'vertical',
//   parallaxOptions: {
//       type: 'reveal',
//       percentage: 500,
//       property: 'translate'

//   },

var myFullpage = new fullpage('#fullpage', {

  sectionsColor: ['#fff', '#fff', '#fff'],
  anchors: ['firstPage', 'secondPage', 'thirdPage'],
    responsiveHeight: 900,
  menu: '#menu',

  keyboardScrolling: true,
  navigation: true,
  navigationPosition: 'left',
  scrollingSpeed: 300,
  parallax: true,
  scrollBar: true,
  dragAndMove: 'horizontal',
  parallaxOptions: {
      type: 'reveal',
      percentage: 500,
      property: 'translate'
  },


  onLeave: function(origin, destination, direction){
    var leavingSection = this;

        //после покидания раздела 2
    if(origin.index == 1 && direction =='down'){
        setTimeout(function() {
            $('.share').addClass('active');
            $('.buttons, .vicon').addClass('active');
            $('.contact, #fp-nav ul li a.active span, #fp-nav ul li a span, .btn, .hole, body, .vicon_txt, .oldweb').addClass('white');
        }, 50);

    }

    else if(direction == 'up'){
        $('.share').removeClass('active');
        $('.buttons, .vicon').removeClass('active');
        $('.contact, #fp-nav ul li a.active span, #fp-nav ul li a span, .btn, .hole, body, .vicon_txt, .oldweb').removeClass('white');
    }
}

});

$(document).on('click', '#moveDown', function(){
  fullpage_api.moveSectionDown();
});


$(".btn").click(function () {
  $(this).toggleClass("open");
});

$(".btn, #menu li").click(function () {
    $(".overlay").toggleClass("open");
});

$("#menu li").click(function () {
    $(".btn").removeClass("open");
});
$(".brand-logo").click(function () {
  $(this).toggleClass("open");
});



$("a.buttons:nth-last-child(1)").click(function () {
  $('a.buttons').toggleClass("hovered");
});


$("a.buttons:nth-last-child(1)").click(function () {
  $('.float-action-button_txt').toggleClass("hovered");
});


var canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

function noise(ctx) {

    var w = ctx.canvas.width,
    h = ctx.canvas.height,
    idata = ctx.createImageData(w, h),
    buffer32 = new Uint32Array(idata.data.buffer),
    len = buffer32.length,
    i = 0;

    for(; i < len;)
        buffer32[i++] = ((4000 * Math.random())|0) << 30;
    
    ctx.putImageData(idata, 0, 0);
}

var toggle = true;

// added toggle to get 30 FPS instead of 60 FPS
(function loop() {
    toggle = !toggle;
    if (toggle) {
        requestAnimationFrame(loop);
        return;
    }
    noise(ctx);
    requestAnimationFrame(loop);
})();




var typed = new Typed('.typed', {
  strings: ['ux/ui design','development', 'research'],
  typeSpeed: 50,
  backSpeed: 10,
  startDelay: 1000,
  backDelay: 500,
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,
  shuffle: true,
  smartBackspace: false,
  loop: true
});

var typed = new Typed('.typed_promo', {
  strings: ['Hi! I am Mikhail Shipov, a UX/UI designer.', 'I work in design and branding, and my programming skills help me create thoughtful solutions.', 'I ve completed numerous projects, from landing pages and websites to design systems and government platforms.'],
  typeSpeed: 6,
  backSpeed: 14,
  startDelay: 500,
  backDelay: 1000,
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,
  shuffle: true,
  smartBackspace: false,
  loop: true
});

setTimeout(function(){
$('body').addClass('selected');
},1500)

setTimeout(function(){
$('.preloader').addClass('selected');
},1500)

setTimeout(function(){
$('.preloader').addClass('none');
},2000)


new WOW().init();

$(window).scroll(function(){
	if ($(this).scrollTop() > 1000) {
		$('.totop').fadeIn();
	} else {
		$('.totop').fadeOut();
	}
});


$('.totop').click(function(){
	$('html, body').animate({scrollTop : 0},50);
	return false;
});

