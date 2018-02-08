
$("#button").click(function(){
    var username=$("#username").val();
    var passwordValue=$("#password").val();
  $.ajax({
    
    url:"http://akademiasovy.ddns.net:8081/api/auth/login",
    type: 'POST',
    contentType:'application/json',
    data: JSON.stringify({"userName":username,"password":password}),
    success: function(data){
        data.token
        window.location.href='secondpage.html';
    },
    error: function(){
        
$("#error").show();
    

    }


  });
});