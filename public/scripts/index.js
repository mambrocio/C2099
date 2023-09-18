let myvid = $('.video-intro')[0];
$(window).scroll(function(){
  var scroll = $(this).scrollTop();
  scroll > 990 ? myvid.pause() : myvid.play()
})