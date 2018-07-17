window.onload = function() {
    $(".title-container").hide();
    $('header a[href="/"]').click(function(e) {
    e.preventDefault();
    self.location = "http://www.shootspace.io";
  });
}

// var newImage = $("<img>");
// newImage.attr("href", "../images/SS-logo-black-p-800.png");
// console.log(newImage);
// $(".coverimage").prepend("HELLO");

