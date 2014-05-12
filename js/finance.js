/*---------------------------------------------------------------------------------        
 ------------------------Recipet Generation---------------------------------------
----------------------------------------------------------------------------------*/

/* Print Receipt -  printDiv will print div passed as parameter */
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
/*---------------------------------------------------------------------------------        
 ------------------------Finance Credit--------------------------------------------
----------------------------------------------------------------------------------*/

/* Search for Transaction details from database */
       function searchTransaction(divID){
	        transNum = $('#credit #creditinput #TransactionNum').val();
			getTransInfo(transNum);
        }
        
                 
/* Get Transaction details from database */        
        function getTransInfo(transnum) {
       
       /* Data is taken from JSON file, once database is integrated to be taken by database */
       
            $.getJSON('JSON/result.json', function(jd) { 
                        $('#credit #creditinput #fname').val(jd.fname);
                         
                        $('#credit #creditinput #apartment').val(jd.apartment);
 				        $('#credit #creditinput #fname').attr("disabled","true");  

 				        $('#credit #creditinput #phone').val(jd.phone);
				        $('#credit #creditinput #Amount').val(jd.Amount);
				        $('#credit #creditinput #CheckNumber').val(jd.CheckNumber);
				        $('#credit #creditinput #BankName').val(jd.BankName);
				        $('#credit #creditinput #BankCode').val(jd.BankCode);
				        $('#credit #creditinput #Remarks').val(jd.Remarks);
				        $('input[type=text]').prop('disabled', true); 
				        $('#credit #creditinput #TransactionNum').prop('disabled', false); 

						}); 
					}

/* Load Credit window */        
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

/*---------------------------------------------------------------------------------        
 ------------------------Finance Debit--------------------------------------------
----------------------------------------------------------------------------------*/

/* Debit Information to be sent for Approval */
        function senddebitinfo(divID){
	        alert("Debit information is sent for approval");
	        loadfinancedetails();
        }
                      
/* Load Debit Window ----------*/            
		function loaddebitwin(divID) {
            var cont = $('#filler-below');
				cont.load('finance.html #debitwin', function(){
				console.log("inside finance debit");
          
        });
        }
        
        
        
/*---------------------------------------------------------------------------------        
------------------------Receipt--------------------------------------------
----------------------------------------------------------------------------------*/
function generateReceipt()
{
/* Send data to database */
/* Update Transaction ID */
                       
         /*    window.open('Receipt.html', 'newwindow', 'width=300, height=250');
             
              $('Receipt').html('<p> Padma: ' + jd.name + '</p>');*/
              
              
              /* Generate receipt */
			  var receiptdata;
			  var cont = $('#filler-below');
				cont.load('finance.html #Receiptwin', function(){
				console.log("inside finance Receipt");
				 $.getJSON('JSON/result.json', function(jd) { 
					 $('#Receiptwin #Receipt #transnum').append(jd.transactionNum);
					 $('#Receiptwin #Receipt #receiptName').append(jd.fname);
					 $('#Receiptwin #Receipt #receiptMobile').append(jd.phone);
				     $('#Receiptwin #Receipt #receiptLandLine').append(jd.fname);
					 $('#Receiptwin #Receipt #receiptAptNum').append(jd.apartment);
					 $('#Receiptwin #Receipt #receiptAmt').append(jd.Amount);
					/*$(jd.transactionNum).appendTo('#Receiptwin #Receipt #transnum');*/

				});
			/*	
             $('#Receiptwin').append('<p> Details: ' + jd.Details+ '</p>');*/

				       
}
             
);

				        
				        

}
/*---------------------------------------------------------------------------------        
 ------------------------Load Finance--------------------------------------------
----------------------------------------------------------------------------------*/
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

