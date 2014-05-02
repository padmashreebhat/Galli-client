
/* printDiv will print div passed as parameter */
        function printDiv(divID) {
            //Get the HTML of div
            var divElements = document.getElementById(divID).innerHTML;
            //Get the HTML of whole page
            var oldPage = document.body.innerHTML;

            //Reset the page's HTML with div's HTML only
            document.body.innerHTML = 
              "<html><head><title></title></head><body>" + 
              divElements + "</body>";

            //Print Page
            window.print();

            //Restore orignal HTML
            document.body.innerHTML = oldPage;
        }


       function senddebitinfo(divID){
	        alert("Debit information is sent for approval");
        }
        
        function loadcreditwin(divID) {
            var cont = $('#filler-below');
				cont.load('creditentry.html #credit', function(){
				console.log("inside finance credit");
				$('#credit #creditinput #transsubmit').click(function(){
					console.log("inside transsubmit click");
					var transNum =0;
					transNum = $('#credit #creditinput #TransactionNum').val();
					console.log(transNum);
					getTransInfo(transNum);
				});
        });
        }

        
        function loadcreditwinorig(divID) {
            var cont = $('#filler-below');
				cont.load('finance.html #creditwin', function(){
				console.log("inside finance credit");
				$('#creditwin #creditinput #transsubmit').click(function(){
					console.log("inside transsubmit click");
					var transNum =0;
					transNum = $('#creditwin #creditinput #TransactionNum').val();
					console.log(transNum);
					getTransDetails(transNum);
				});
        });
        }
        
        function getTransInfo(transnum) {
           	console.log("inside getTransDetails");
           $.getJSON('../JSON/result.json', function(jd) {
             $('#stage').html('<p> Name: ' + jd.name + '</p>');
             $('#stage').append('<p>AptNumber : ' + jd.AptNumber+ '</p>');
             $('#stage').append('<p> Amount: ' + jd.Amount+ '</p>');
             $('#stage').append('<p> Mode: ' + jd.Mode+ '</p>');
             $('#stage').append('<p> Details: ' + jd.Details+ '</p>');
             
          });
      }
                      
       
				$('#creditwin #creditinput #transsubmit').click(function(){
					console.log("inside transsubmit click");
					var transNum =0;
					transNum = $('#creditwin #creditinput #TransactionNum').val();
					console.log(transNum);
				});

    
        
		function loaddebitwin(divID) {
            var cont = $('#filler-below');
				cont.load('finance.html #debitwin', function(){
				console.log("inside finance debit");
          
        });
        }
 
 function loadfinancedetails(divID) {
		    console.log(divID);
		    
            var cont = $('#filler-below');
				cont.load('finance.html #finance', function(){
				console.log("inside finance");			

				$('#finance #tabscontent #credit').show();
				$('#finance #tabscontent #debit').hide();
				
				cont = $('#finance #tabs #credit');
				$(cont).hover(function(e){ 
					console.log("inside credit");
					$('#finance #tabscontent #credit').show();
					$('#finance #tabscontent #debit').hide();
					});			          
							        
				cont = $('#finance #tabs #debit');
				$(cont).hover(function(e){ 
					console.log("inside debit");
					$('#finance #tabscontent #credit').hide();
					$('#finance #tabscontent #debit').show();
					});			          
				});
        }


