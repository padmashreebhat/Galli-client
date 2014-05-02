   $(document).ready(function() {
      $("#driver").click(function(event){
          $.getJSON('../json/result.json', function(jd) {
             $('#credit').html('<p> Name: ' + jd.name + '</p>');
             $('#credit').append('<p>AptNumber : ' + jd.AptNumber+ '</p>');
             $('#credit').append('<p> Amount: ' + jd.Amount+ '</p>');
             $('#credit').append('<p> Mode: ' + jd.Mode+ '</p>');
             $('#credit').append('<p> Details: ' + jd.Details+ '</p>');
             
          });
      });
   });

