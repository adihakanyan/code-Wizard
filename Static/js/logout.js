$(function () {
    document.addEventListener("click", function(e) {
        document.getElementById("logout").onclick = function(){
             //console.log("you are in logout.js ")
            var dataString = $(this).serialize();

           //alert(dataString); return false;
           $.ajax({
              type: "GET",
              url: "/logout",
              success: function (res) {

                  if(res == 'success'){
                            window.location.href = '/login';
                        }
                    else{
                        alert("Something went wrong.");
                    }
              }
            });
            e.preventDefault();
        };
    });


     $("button").on( "submit", function(e) {
            console.log("you are in logout.js ")
            var dataString = $(this).serialize();

            alert(dataString); return false;

            $.ajax({
              type: "GET",
              url: "/logout",
              success: function (res) {

                  if(res == 'success'){
                            window.location.href = '/login';
                        }
                    else{
                        alert("Something went wrong.");
                    }
              }
            });
            e.preventDefault();
     });
});

