


function CloseAlertBox() {
            $("#rejectbox").hide();
        }

        function OpenAlertBox() {
            $("#rejectbox").show();
        }

function loadsealofapproval(divID) {
		    
            var cont = $('#filler-below');
				cont.load('association.html #association', function(){
				console.log("inside association");
				$("#rejectbox").hide();
            $("#rejectbox").draggable();            
						}
				)};

function ApproveReq()
{
}
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
			      tablecontents += "<td>" + jd.transactionNum +"</td>";
			      tablecontents += "<td>" + jd.date + "</td>";
			      tablecontents += "<td>" + jd.Amount + "</td>";
			      tablecontents += "<td>" + jd.Remarks+ "</td>";
			      tablecontents += "<td>" + "Approved" + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewReq(this)">' + "</td>";
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
		      tablecontents += "<th>" + "Details" + "</th>";
		      tablecontents += "<th>" + "Approve" + "</th>";
		      tablecontents += "<th>" + "Reject" + "</th>";
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
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewReq(this)">' + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "Approve" onClick="Javacsript:ApproveReq(this)">' + "</td>";
				  tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "Reject" onClick="Javacsript:RejectReq(this)">' + "</td>";
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

/*function ViewDetails(obj){
var index = obj.parentNode.parentNode.rowIndex;
var table = document.getElementById("tablespace");
var transID = table[index].getAttribute("TransactionID");
}*/

function ApproveReq(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("tablespace");
    table.deleteRow(index);
    /*Update status as approved and remove row from this list */
}

function RejectReq(obj) {

	OpenAlertBox();
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("tablespace");
    table.deleteRow(index);

    /*Update status as Rejected and remove row from this list */
}

function ViewReq(obj){
/* View Row details */
}
$("#transvalue ").click(function(){
	console.log("transaction value clicked");
});