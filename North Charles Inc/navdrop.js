// clickable dropdown menu parent
$('.navbar .dropdown > a').on('click', function(e) {
    let elementBegin = $(this).offset()['left']; // get link position X

    // get the width of the menu by text's length
    // you need to contain the text inside a span tag
    let spanWidth = $(this).find("> span").width();
    let clickAreaLength = spanWidth * 0.9; // 90% of width = clickable area

    let clickPositionX = e.pageX; // position of the click

    // if click position is inside the clickable area, then redirect
    if (clickPositionX < elementBegin + clickAreaLength) {
      location.href = this.href;
    }
  });