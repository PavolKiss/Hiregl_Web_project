$(document).ready(function() {
    $("#error").hide();

       $("#username").keyup(function(){
            var username = $("#username").val();
            if(username.trim().length<2){
                $("#errorusr").show();
            }
            else if(username.trim().length>2)
                $("#errorusr").hide();
        });
        $("#password").keyup(function(){
            var password = $("#password").val();
            if(password.trim().length<2){
                $("#errorpwd").show();

            }
             else if (password.trim().length>2)
                    $("#errorpwd").hide();

      });

  $("#button").click(function(){
        var username=$("#username").val();
        var password=$("#password").val();
    if(username.trim().length<2 || password.trim().length<2 ){
    $("#error").show();
    
    }

    else
    {
$("#error").hide();






    }
    });
  $("#button").click(function(){
    var userNameValue=$("#username").val();
    var passwordValue=$("#password").val();
  $.ajax({
    
    url:"http://akademiasovy.ddns.net:8081/api/auth/login",
    type: 'POST',
    contentType:'application/json',
    data: JSON.stringify({"userName":username,"password":password}),
    success: function(data){
        data.token
        window.location.href='page2.html';
    },
    error: function(){
        
$("#error").show();
    

    }







  });
});



      


});

 