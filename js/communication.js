/*---------------------------------------------------------------------------------        
 ------------------------Load Complaint Box--------------------------------------------
----------------------------------------------------------------------------------*/
 function loadcompliantbox(divID) {
            var cont = $('#filler-below');
				cont.load('communication.html #CompliantBox', function(){
				console.log("inside CompliantBox");			

				$('#CompliantBox #tabscontent #CreateCompliant').show();
				$('#CompliantBox #tabscontent #ViewCompliant').hide();
				
				cont = $('#CompliantBox #tabs #Create');
				$(cont).hover(function(e){ 
					console.log("inside Create");
					$('#CompliantBox #tabscontent #CreateCompliant').show();
					$('#CompliantBox #tabscontent #ViewCompliant').hide();
					});			          
				cont = $('#CompliantBox #tabs #View');
				$(cont).hover(function(e){ 
					console.log("inside View");
					$('#CompliantBox #tabscontent #CreateCompliant').hide();
					$('#CompliantBox #tabscontent #ViewCompliant').show();
					createcomplainttable();
					});			          
				});

        }

function createcomplainttable(){
			     var tablecontents = "";
		    tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "CompliantID" + "</th>";
		      tablecontents += "<th>" + "Date" + "</th>";
		      tablecontents += "<th>" + "Subject" + "</th>";
		      tablecontents += "<th>" + "AssignedTo" + "</th>";
		      tablecontents += "<th>" + "Status" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 15; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.transactionNum +"</td>";
			      tablecontents += "<td>" + jd.date + "</td>";
			      tablecontents += "<td>" + jd.Remarks + "</td>";
			      tablecontents += "<td>" + jd.fname+ "</td>";
			      tablecontents += "<td>" + "Approved" + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewReq(this)">' + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("complianttable").innerHTML = tablecontents;
				});
				
				$("#transvalue ").click(function(){
				alert("transaction value clicked");
});

}