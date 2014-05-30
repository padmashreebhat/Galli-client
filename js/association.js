
$(document).ready(function () {
$("#transvalue").click(function(){
	console.log("transaction value clicked");
});
});

function loadsealofapproval(divID) {
		    
            var cont = $('#filler-below');
				cont.load('association.html #association', function(){
				console.log("inside association");			}
				)};


function  CreateSealofApproval()
{

if("Approved"==document.getElementById("approvalstatus").value)
{
		     var tablecontents = "";
		    tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "TransactionID" + "</th>";
		      tablecontents += "<th>" + "Date" + "</th>";
		      tablecontents += "<th>" + "Amount" + "</th>";
		      tablecontents += "<th>" + "Remarks" + "</th>";
		      tablecontents += "<th>" + "Status" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 15; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + "<div>" + "<a id=transvalue>" + jd.transactionNum +"</a>" +"</div>" + "</td>";
			      tablecontents += "<td>" + jd.date + "</td>";
			      tablecontents += "<td>" + jd.Amount + "</td>";
			      tablecontents += "<td>" + jd.Remarks+ "</td>";
			      tablecontents += "<td>" + "Approved" + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("tablespace").innerHTML = tablecontents;
				});
				
				$("#transvalue ").click(function(){
	alert("transaction value clicked");
});
		
}
else
{
		     var tablecontents = "";
		    tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "TransactionID" + "</th>";
		      tablecontents += "<th>" + "Date" + "</th>";
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
			      tablecontents += "<td>" + jd.Amount + "</td>";
			      tablecontents += "<td>" + jd.Remarks+ "</td>";
			      tablecontents += "<td>" + "Pending" + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("tablespace").innerHTML = tablecontents;
				});
		
$("#transvalue ").click(function(){
	console.log("transaction value clicked");
});

}

}


$("#transvalue ").click(function(){
	console.log("transaction value clicked");
});