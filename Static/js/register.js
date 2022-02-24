$(function () {
 $( "form" ).on( "submit", function(e) {

    var dataString = $(this).serialize();

    //alert(dataString); return false;

    $.ajax({
      type: "POST",
      url: "/postregistration",
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
//});












//$(document).ready(function(){
//    console.log("loaded");
//    $material.init();
//
//    #(document).on("submit", "#register-form", function(e){
//        e.preventDefault();
//        console.log("form-submitted");
//    });
//}

//
//
//
//function ajaxgo(){
//
//    var data = new FormData();
//    //Get form data
//    data.append("Username", document.getElementById("Username").value);
//    data.append("Full name", document.getElementById("Full name").value);
//    data.append("Email Adders", document.getElementById("Email Adders").value);
//    data.append("Password", document.getElementById("Password").value);
//
//    //AJAX
//     var xhr  = new XMLHttpRequest();
//     xhr.open('POST',"dummy.php");
//
//     xhr.onload = function(){
//        console.log(this.response);
//     };
//
//     xhr.send(data)
//
//     //Prevent html form submit
//     return false;
//
//}


//
//$(document).ready(function () {
//
//		 $('#submit-registering').click(function(){
//			$.ajax('/register',   // request url
//			{
//				success: function (data, status, xhr) {    // success callback function
//						 console.log(data);
//				}
//			});
//		 });
//
//        });




// this is the id of the form
//$("#register-form").submit(function(e) {
//
//    e.preventDefault(); // avoid to execute the actual submit of the form.
//
//    var form = $(this);
//    var actionUrl = form.attr('action');
//
//    $.ajax({
//        type: "POST",
//        url: actionUrl,
//        data: form.serialize(), // serializes the form's elements.
//        success: function(data)
//        {
//          alert(data); // show response from the php script.
//        }
//    });
//
//});



//
//$(document).ready(function () {
//
//		 $('#submit-registering').click(function(){
//			var form = $('#register-form');
//			$.ajax('/register', {
//				type: 'POST',  // http method
//				data: form,  // data to submit
//				success: function (response) {
//				console.log(response);
//				}
//
//			});
//		});
//    });


//
//document.addEventListener('DOMContentLoaded', function(e){
//    e.preventDefault();
//    document.querySelector('button', "submit-registering").onclick = submitted;
//
//});
//
//function submitted(e){
//     e.preventDefault();
//     console.log("form submitted");
//
//     var form = $('#register-form').serialize();
//     $.ajax({
//        url: '/postregistration',
//        type: 'POST',
//        data: form,
//        success: function(response){
//            console.log(response);
//        }
//     });
//
//     let xhr  = new XMLHttpRequest()
//
//     xhr.onload = function(){
//
//        if(xhr.status == 200){
//            console.log("success")
//        }
//     };
//
//     xhr.open('POST', '/PostRegistration', true)
//
//
//     xhr.send()
//}



