
/*=========================================================================*/        
/* Association menu
/* Schedule Meeting, Capture MOM, Capture Action Points, Create Association group
/* View Association group
/*=========================================================================*/   


function ScheduleMeeting(divID) {
            var cont = $('#filler-below');
				cont.load('association.html #Meeting', function(){
				console.log("inside Meeting");			

				$('#Meeting #tabscontent #ScheduleMeeting').show();
				$('#Meeting #tabscontent #ViewMeeting').hide();
				$('#Meeting #tabscontent #MOM').hide();

				cont = $('#Meeting #tabs #Schedule');
				$(cont).hover(function(e){ 
					console.log("inside Schedule");
					$('#Meeting #tabscontent #ScheduleMeeting').show();
					$('#Meeting #tabscontent #ViewMeeting').hide();
					});			
					
				cont = $('#Meeting #tabs #View');
				$(cont).hover(function(e){ 
					console.log("inside View");
					$('#Meeting #tabscontent #ScheduleMeeting').hide();
					$('#Meeting #tabscontent #ViewMeeting').show();
					createMeetingTable();
					});			          
				});
				$('#filler-below').show();
        }


/*=========================================================================*/ 
/* Sub  Menu1***************************************************************/       
/***************************************** Meeting *************************/
/*=========================================================================*/   

/*=========================================================================*/        
/* View Open and closed meeting requests 
/* Creates list of meetings which are Open and Closed
/*=========================================================================*/   
       
function createMeetingTable(){
		 var tablecontents = "";
		 tablecontents = "<table>";
		 tablecontents += "<tr>";
		 tablecontents += "<th>" + "MeetingID" + "</th>";
		 tablecontents += "<th>" + "Date" + "</th>";
		 tablecontents += "<th>" + "Subject" + "</th>";
		 tablecontents += "<th>" + "" + "</th>";

			if("Open"==document.getElementById("status").value)
			{
					      tablecontents += "<th>" + "" + "</th>";
					      tablecontents += "</tr>";
					
					/* Read content from JSON file and update the same */
						  $.getJSON('JSON/result.json', function(jd) { 
						  for (var i = 0; i < 5; i ++)
						   {
						      tablecontents += "<tr>";
						      tablecontents += "<td>" + jd.transactionNum +"</td>";
						      tablecontents += "<td>" + jd.date + "</td>";
						      tablecontents += "<td>" + jd.Remarks + "</td>";
						      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "Cancel" onClick="Javacsript:deleteActionPoint(this)">' + "</td>";
						      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:openMOM(this)">' + "</td>";
						      tablecontents += "</tr>";
						   }
						   
						   tablecontents += "</table>";
						   document.getElementById("meetingtable").innerHTML = tablecontents;
							});
			}
			else
			{
					      tablecontents += "</tr>";
					
					/* Read content from JSON file and update the same */
						  $.getJSON('JSON/result.json', function(jd) { 
						  for (var i = 0; i < 5; i ++)
						   {
						      tablecontents += "<tr>";
						      tablecontents += "<td>" + jd.transactionNum +"</td>";
						      tablecontents += "<td>" + jd.date + "</td>";
						      tablecontents += "<td>" + jd.Remarks + "</td>";
						      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewMOM(this)">' + "</td>";
						      tablecontents += "</tr>";
						   }
						   
						   tablecontents += "</table>";
						   document.getElementById("meetingtable").innerHTML = tablecontents;
							});
			}
}


/*---------------------------------------------------------------------------------        
 ------------------------Load MOM Window --------------------------------------------
 ------------------------Add and modify Actions points
 ------------------------Updated meeting details, close meeting --------------------- ----------------------------------------------------------------------------------*/


function openMOM(){
	            var cont = $('#filler-below');
				cont.load('association.html #Meeting #tabscontent #MOM', function(){
				 $('#MOM #apviewBox').hide();
				$('#MOM #ViewMOM').hide();
				CreateMOMtable();
				});		
}

/*---------------------------------------------------------------------------------        
 ------------------------View MOM Window --------------------------------------------
 ------------------------View Action points
 ----------------------------------------------------------------------------------*/


function ViewMOM(obj){
				var index = obj.parentNode.parentNode.rowIndex;
			    var table = document.getElementById("meetingtable");
			    var x = document.getElementById("meetingtable").rows[index].cells;
			    var meetingid= x[0].innerHTML;
			    var ID="<disptext>"+meetingid+"</disptext>";

 			    /* Get details from database */
 			    var subject="Regular biweekly meeting";
			    var Subject="<disptext>"+subject+"</disptext>";
			    var attendees="<disptext>"+"Raghav Padma Pragnya Parth"+"</disptext>";
			    var MoM="1.Come up with qutation for security 2.Add maid details in to database";

	            var cont = $('#filler-below');
				cont.load('association.html #Meeting #tabscontent #MOM', function(){
				$('#MOM #apviewBox').hide();
				$('#MOM #CreateMOM').hide();
				$('#ViewMOM #CreateMOM').hide();
				$("#ViewMOM #Create #meetID").html(ID+"<br>");
			    $("#ViewMOM #Create #meetsub").html(Subject+"<br>");
				$("#ViewMOM #Create #Attendees").html(attendees+"<br>");
				$("#ViewMOM #Create #minutes").html(MoM);
				ViewMOMtable();
				});		
}


/*---------------------------------------------------------------------------------        
 ------------------------Subwindow related operations -----------------------------
----------------------------------------------------------------------------------*/


function CloseAlertBox() {
            $("#rejectbox").hide();
        }

        function OpenAlertBox() {
            $("#rejectbox").show();
        }

		
        function OpenAPViewWindow() {
            $('#MOM #apviewBox').show();
        }
		
		function CloseAPViewWindow(){
			$('#MOM #apviewBox').hide();
		}



/*---------------------------------------------------------------------------------        
 ------------------------Load AP table --------------------------------------------
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
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewActionPointDetails(this,1)">' + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "Delete" onClick="Javacsript:deleteActionPoint(this)">' + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("momtable").innerHTML = tablecontents;
				});

}
/*---------------------------------------------------------------------------------        
 ------------------------View AP table --------------------------------------------
----------------------------------------------------------------------------------*/

function ViewMOMtable()
{
		      var tablecontents = "";
		      tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "ActionPoint" + "</th>";
		      tablecontents += "<th>" + "ActionOwner" + "</th>";
		      tablecontents += "<th>" + "ActualDate" + "</th>";
		      tablecontents += "<th>" + "" + "</th>";
		      tablecontents += "</tr>";
		
			  /* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 3; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.SPName + "</td>";
			      tablecontents += "<td>" + jd.Starttime + "</td>";
			      tablecontents += "<td>" + jd.FromDate + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewActionPointDetails(this,0)">' + "</td>";
			      tablecontents += "</tr>";
			   }
			   tablecontents += "</table>";
			   document.getElementById("viewmomtable").innerHTML = tablecontents;
				});

}

function deleteActionPoint(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("momtable");
    table.deleteRow(index);
    
}

				
function AddActionPoint(){
    
    var ActionPoint = document.getElementById("ActionPoint");
    var tdate = document.getElementById("tdate");
    var cdate = document.getElementById("cdate");
    var ActionOwner = document.getElementById("ActionOwner");
    var table = document.getElementById("momtable");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(1);

 
    row.insertCell(0).innerHTML= ActionPoint.value;
    row.insertCell(1).innerHTML= ActionOwner.value;
    row.insertCell(2).innerHTML= tdate.value;
    row.insertCell(3).innerHTML= cdate.value;
    row.insertCell(4).innerHTML= '<input type="text" value = "Open" style="width:60px">';
    row.insertCell(5).innerHTML= '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewActionPointDetails(this,1)">' ;
    row.insertCell(6).innerHTML= '<input type="button" class="tablebutton" value = "Delete" onClick="Javacsript:deleteActionPoint(this)">' ;
		}		
		
/*---------------------------------------------------------------------------------        
 ------------------------View ActionPoint Details --------------------------------------------
----------------------------------------------------------------------------------*/



function ViewActionPointDetails(obj,type){
	    /* Get SPIndex */
	var index = obj.parentNode.parentNode.rowIndex;
	if(type)
	{
		/*Create MOM */
		    var table = document.getElementById("momtable");
			var x = document.getElementById("momtable").rows[index].cells;

	}
	else
	{
		/*View MOM*/
		    var table = document.getElementById("viewmomtable");
			var x = document.getElementById("viewmomtable").rows[index].cells;
	}
    var apid= x[0].innerHTML;
    var APID="<disptext>"+apid+"</disptext>";
    var apDetails="Get security quotations from different companies";
    var Details="<disptext>"+apDetails+"</disptext>";
    /* Get Address, history other details from database */
      
        $("#MOM #apviewBox").show();
        $("#MOM #apviewBox #apID").html(APID+"<br>");
        $("#MOM #apviewBox #apdet").html(Details+"<br>");
		$("#MOM #apviewBox #apphoto").html("<img id='apphoto' src='images/actionpoint.png'/>");
}

		 

/*---------------------------------------------------------------------------------        
 ------------------------Database Interfaces--------------------------------------------
----------------------------------------------------------------------------------*/
 
 
  				
function searchMeetingDetails()
{
			   alert("searchMeetingDetails...Search for meeting details extracting from database");
}
function scheduleMeeting()
{
			    alert("scheduleMeeting: Store in database and send mail to all attendees. Integrate with google calen??");
}


function StoreMoM()
{
	alert("store MOM in database");
}


       
        
/*=========================================================================*/        
/* Menu2 *******************************************************************/
/* Seal of Approval */
/*=========================================================================*/   
function CloseRequestDetail() {
            $("#viewSealofApprovalDet").hide();
            
        }
function OpenRequestDetail() {
            $("#viewSealofApprovalDet").show();
        }
function ViewRequestDetailsWindow(obj){
		var index = obj.parentNode.parentNode.rowIndex;
		var table = document.getElementById("tablespace");
		var x = document.getElementById("tablespace").rows[index].cells;
		var Requestid= x[0].innerHTML;
		var Requestid="<h3>"+Requestid+"</h3>";
		var RequestDetails="Approval for Disel charges for the month of August 2014 required"
    /* Get Address, history other details from database */
      OpenRequestDetail();
        $("#viewSealofApprovalDet #RequestID").html(Requestid+"<br>");
        $("#viewSealofApprovalDet #RequestDet").html(RequestDetails+"<br>");
}

function loadsealofapproval(divID) {
		    
            var cont = $('#filler-below');
				cont.load('association.html #sealofapproval', function(){
				console.log("inside sealofapproval");
				CloseRequestDetail();
				$("#rejectbox").hide();
						});
						$('#filler-below').show();
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
			  for (var i = 0; i < 5; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.transactionNum +"</td>";
			      tablecontents += "<td>" + jd.date + "</td>";
			      tablecontents += "<td>" + jd.Amount + "</td>";
			      tablecontents += "<td>" + jd.Remarks+ "</td>";
			      tablecontents += "<td>" + "Approved" + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewRequestDetailsWindow(this)">' + "</td>";
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
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 5; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.transactionNum + "</td>";
			      tablecontents += "<td>" + jd.date + "</td>";
			      tablecontents += "<td>" + jd.Amount + "</td>";
			      tablecontents += "<td>" + jd.Remarks+ "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewRequestDetailsWindow(this)">' + "</td>";
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

function ApproveRequest(obj) {
      CloseRequestDetail();
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("tablespace");
    table.deleteRow(index);
    /*Update status as approved and remove row from this list */
}

function RejectRequest(obj) {
CloseRequestDetail();
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("tablespace");
    table.deleteRow(index);

    /*Update status as Rejected and remove row from this list */
}

function ViewReq(obj){
/* View Row details */
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
					
					});			          
				});
				$('#filler-below').show();
        }


