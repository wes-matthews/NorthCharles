$('.navbar .dropdown > a').click(function() {
    if (!$(this).hasClass("parent-clicked")) {
       $(this).addClass("parent-clicked");
     } else {
       location.href = this.href;
     }
   });