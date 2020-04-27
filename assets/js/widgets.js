function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }
  $("#manicure").click(function() {scrollToAnchor('manicure');});
  $("#pedicure").click(function() {scrollToAnchor('pedicure');});
  $("#extras").click(function() {scrollToAnchor('extras');});
  $("#therapists").click(function() {scrollToAnchor('therapists');});
  $("#top").click(function() {scrollToAnchor('top');});