var myvid = $('.video-intro')[0];
$(window).scroll(function(){
  var scroll = $(this).scrollTop();
  scroll > 700 ? myvid.pause() : myvid.play()
})