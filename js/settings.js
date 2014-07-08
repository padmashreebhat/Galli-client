/*---------------------------------------------------------------------------------        
 ------------------------Load Finance--------------------------------------------
----------------------------------------------------------------------------------*/
 function loadsettingsdetails(divID) {
		    console.log(divID);
		    
            var cont = $('#filler-below');
				cont.load('settings.html #settings', function(){
				console.log("inside settings");			

				$('#settings #tabscontent #credit').show();
				$('#settings #tabscontent #debit').hide();
				$('#settings #tabscontent #report').hide();
				
				cont = $('#finance #tabs #credit');
				$(cont).hover(function(e){ 
					console.log("inside credit");
					$('#finance #tabscontent #credit').show();
					$('#finance #tabscontent #debit').hide();
					$('#finance #tabscontent #report').hide();
					});			          
							        
				cont = $('#finance #tabs #debit');
				$(cont).hover(function(e){ 
					console.log("inside debit");
					$('#finance #tabscontent #credit').hide();
					$('#finance #tabscontent #debit').show();
					$('#finance #tabscontent #report').hide();
					});			          
				cont = $('#finance #tabs #report');
				$(cont).hover(function(e){ 
					console.log("inside report");
					$('#finance #tabscontent #credit').hide();
					$('#finance #tabscontent #report').show();
					$('#finance #tabscontent #debit').hide();
					});			          
				});

        }

