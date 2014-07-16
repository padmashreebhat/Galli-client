


function CloseAlertBox() {
            $("#rejectbox").hide();
        }

        function OpenAlertBox() {
            $("#rejectbox").show();
        }
/*=========================================================================*/        
/* Seal of Approval */
/*=========================================================================*/        

function loadsealofapproval(divID) {
		    
            var cont = $('#filler-below');
				cont.load('association.html #sealofapproval', function(){
				console.log("inside sealofapproval");
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


/*---------------------------------------------------------------------------------        
 ------------------------ Meeting --------------------------------------------
----------------------------------------------------------------------------------*/
 function ScheduleMeeting(divID) {
            var cont = $('#filler-below');
				cont.load('association.html #Meeting', function(){
				console.log("inside Meeting");			

				$('#Meeting #tabscontent #ScheduleMeeting').show();
				$('#Meeting #tabscontent #ViewMeeting').hide();
				$('#Meeting #tabscontent #CreateMOM').hide();

				cont = $('#Meeting #tabs #Schedule');
				$(cont).hover(function(e){ 
					console.log("inside Schedule");
					$('#Meeting #tabscontent #ScheduleMeeting').show();
					$('#Meeting #tabscontent #CreateMOM').hide();
					$('#Meeting #tabscontent #ViewMeeting').hide();
					});			
					
				cont = $('#Meeting #tabs #MOM');
				$(cont).hover(function(e){ 
					console.log("inside Schedule");
					$('#Meeting #tabscontent #ScheduleMeeting').hide();
					$('#Meeting #tabscontent #CreateMOM').show();
					$('#Meeting #tabscontent #ViewMeeting').hide();
					CreateMOMtable();
					});			                    
				cont = $('#Meeting #tabs #View');
				$(cont).hover(function(e){ 
					console.log("inside View");
					$('#Meeting #tabscontent #ScheduleMeeting').hide();
					$('#Meeting #tabscontent #CreateMOM').hide();
					$('#Meeting #tabscontent #ViewMeeting').show();
					createMeetingTable();
					});			          
				});

        }
function createMeetingTable(){
			     var tablecontents = "";
		    tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "MeetingID" + "</th>";
		      tablecontents += "<th>" + "Date" + "</th>";
		      tablecontents += "<th>" + "Subject" + "</th>";
		      tablecontents += "<th>" + "" + "</th>";
		      tablecontents += "<th>" + "" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 10; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.transactionNum +"</td>";
			      tablecontents += "<td>" + jd.date + "</td>";
			      tablecontents += "<td>" + jd.Remarks + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "Delete" onClick="Javacsript:deleteActionPoint(this)">' + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewReq(this)">' + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("meetingtable").innerHTML = tablecontents;
				});
				
				$("#transvalue ").click(function(){
				alert("transaction value clicked");
});

}


				
function searchMeetingDetails()
{
			    alert("searchMeetingDetails...Search for meeting details extracting from database");
}
function scheduleMeeting()
{
			    alert("scheduleMeeting: Store in database and send mail to all attendees. Integrate with google calen??");
}


/*---------------------------------------------------------------------------------        
 ------------------------Load Members --------------------------------------------
----------------------------------------------------------------------------------*/
 function loadAssociationMem(divID) {
            var cont = $('#filler-below');
				cont.load('association.html #Members', function(){
				console.log("inside Meeting");			

				$('#Members #tabscontent #Create').show();
				$('#Members #tabscontent #View').hide();
				
				cont = $('#Members #tabs #CreateMembers');
				$(cont).hover(function(e){ 
					console.log("inside Create");
					$('#Members #tabscontent #Create').show();
					$('#Members #tabscontent #View').hide();
					});			          
				cont = $('#Members #tabs #ViewMembers');
				$(cont).hover(function(e){ 
					console.log("inside View");
					$('#Members #tabscontent #Create').hide();
					$('#Members #tabscontent #View').show();
					createMeetingTable();
					});			          
				});

        }


/*---------------------------------------------------------------------------------        
 ------------------------Load MOM --------------------------------------------
----------------------------------------------------------------------------------*/
function CreateMOMtable()
{
		      var tablecontents = "";
		      tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "ActionPoint" + "</th>";
		      tablecontents += "<th>" + "ActionOwner" + "</th>";
		      tablecontents += "<th>" + "TargetDate" + "</th>";
		      tablecontents += "<th>" + "ActualDate" + "</th>";
		      tablecontents += "<th>" + "Status" + "</th>";
		      tablecontents += "<th>" + "" + "</th>";
		      tablecontents += "<th>" + "" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 3; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.SPName + "</td>";
			      tablecontents += "<td>" + jd.Starttime + "</td>";
			      tablecontents += "<td>" + jd.Endtime + "</td>";
			      tablecontents += "<td>" + jd.FromDate + "</td>";
				  tablecontents += "<td>" + '<input type="text" value = "Open" style="width:60px">'+ "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:deleteActionPoint(this)">' + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "Delete" onClick="Javacsript:deleteActionPoint(this)">' + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("momtable").innerHTML = tablecontents;
				});

}

function deleteActionPoint(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("momtable");
    table.deleteRow(index);
    
}


function loadMOM(divID) {
		    
            var cont = $('#filler-below');
				cont.load('association.html #MOM', function(){
				            CreateMOMtable();          
						}
				)};
				
function AddActionPoint(){
alert("insideAddActionPoint");
    var ActionPoint = document.getElementById("ActionPoint");
    var tdate = document.getElementById("tdate");
     var cdate = document.getElementById("cdate");
      var status = document.getElementById("status");
      var ActionOwner = document.getElementById("ActionOwner");
    var table = document.getElementById("momtable");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(1);
 
    row.insertCell(0).innerHTML= ActionPoint.value;
    row.insertCell(1).innerHTML= ActionOwner.value;
    row.insertCell(2).innerHTML= tdate.value;
    row.insertCell(3).innerHTML= cdate.value;
    row.insertCell(4).innerHTML= status.value;
    row.insertCell(5).innerHTML= '<input type="button" class="tablebutton" value = "Delete" onClick="Javacsript:deleteActionPoint(this)">';
    row.insertCell(5).innerHTML= '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:deleteActionPoint(this)">';
		}		
