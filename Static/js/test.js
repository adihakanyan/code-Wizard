$(function () {
 $( "form" ).on( "submit", function(e) {

    var dataString = $(this).serialize();

    // alert(dataString); return false;

    $.ajax({
      type: "POST",
      url: "bin/process.php",
      data: dataString,
      success: function () {
        $("#contact_form").html("<div id='message'></div>");
        $("#message")
          .html("<h2>Contact Form Submitted!</h2>")
          .append("<p>We will be in touch soon.</p>")
          .hide()
          .fadeIn(1500, function () {
            $("#message").append(
              "<img id='checkmark' src='images/check.png' />"
            );
          });
      }
    });

    e.preventDefault();
  });
});

//document.addEventListener('DOMContentLoaded',function(e) {
//
//    document.querySelector('button').onclick = getData;
//     return false;
//    e.preventDefault();
//  });
//
//
//function getData(){
////    let fname = window.document.getElementById("fname").value;
////    console.log(fname);
//    var dataString = $(this).serialize();
//
//    alert("this:", dataString);
//
//}
//


//$(function () {
//  $(document).on( "submit", function(e) {
//
//    var dataString = $(this).serialize();
//
//     alert("this:", dataString); return false;
//
//    $.ajax({
//      type: "POST",
//      url: "/postregistration",
//      data: dataString,
//      success: function (response) {
//        console.log(response);
//        $("#register_form").html("<div id='message'></div>");
//        $("#message")
//          .html("<h2>Contact Form Submitted!</h2>")
//          .append("<p>We will be in touch soon.</p>")
//          .hide()
//          .fadeIn(1500, function () {
//          });
//      }
//    });
//
//     return false;
//    e.preventDefault();
//  });
//
//
//
//});
//