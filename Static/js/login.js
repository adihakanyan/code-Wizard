$(function () {
 $( "form" ).on( "submit", function(e) {
    console.log("hi");
    var dataString = $(this).serialize();

    //alert(dataString); return false;

    $.ajax({
      type: "POST",
      url: "/checklogin",
      data: dataString,
      success: function (response) {
       if (response == "error"){
            alert("Could not log in.");
        }
        else{
        console.log("Login as", response);
        }
      }
    });
    e.preventDefault();
  });
});



//$(function () {
// $(document).on( "submit", "#login_form",  function(e) {
//
//    console.log("form submit")
//    var dataString = $('#login_form').serialize();
//
//     //alert(dataString); return false;
//
//    $.ajax({
//      type: "POST",
//      url: "/checklogin",
//      data: dataString,
//      success: function (response) {
//        if (response == "error"){
//            alert("Could not log in.");
//        }
//        else{
//        console.log("Login as", response);
//        }
//      }
//    });
//
//     return false;
//    e.preventDefault();
//  });
//
//
//});
//
//
//
