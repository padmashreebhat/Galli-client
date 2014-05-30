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

       /* Data is taken from JSON file, once database is integrated to be taken by database */
			getTransInfo(transNum);
        }
        
                 
/* Get Transaction details from database */        
        function getTransInfo(transnum) {
       
       
            $.getJSON('JSON/result.json', function(jd) { 
            			$('#credit #creditinput #TransactionNum').val(transnum);
                        $('#credit #creditinput #fname').val(jd.fname);
                        $('#credit #creditinput #apartment').val(jd.apartment);
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
                       
              /* Generate receipt */

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
				});
});

}
function generateReport()
{
	        alert("Generate report in excel");

};

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
				$('#finance #tabscontent #report').hide();
				
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

function  CreateTransactionTable()
{

if("Credit"==document.getElementById("reporttype").value)
{
		     var tablecontents = "";
		    tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "TransactionID" + "</th>";
		      tablecontents += "<th>" + "Date" + "</th>";
		      tablecontents += "<th>" + "AptNumber" + "</th>";
		      tablecontents += "<th>" + "Amount" + "</th>";
		      tablecontents += "<th>" + "Remarks" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 15; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.transactionNum + "</td>";
			      tablecontents += "<td>" + jd.date + "</td>";
			      tablecontents += "<td>" + jd.apartment + "</td>";
			      tablecontents += "<td>" + jd.Amount+ "</td>";
			      tablecontents += "<td>" + jd.Remarks + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("tablespace").innerHTML = tablecontents;
				});
		
}
else
{
		     var tablecontents = "";
		    tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "TransactionID" + "</th>";
		      tablecontents += "<th>" + "Date" + "</th>";
		      tablecontents += "<th>" + "AptNumber" + "</th>";
		      tablecontents += "<th>" + "Amount" + "</th>";
		      tablecontents += "<th>" + "Remarks" + "</th>";
		      tablecontents += "<th>" + "Status" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 15; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.transactionNum + "</td>";
			      tablecontents += "<td>" + jd.date + "</td>";
			      tablecontents += "<td>" + jd.apartment + "</td>";
			      tablecontents += "<td>" + jd.Amount+ "</td>";
			      tablecontents += "<td>" + jd.Remarks + "</td>";
			      tablecontents += "<td>" + jd.Status + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("tablespace").innerHTML = tablecontents;
				});
		

}

}
