/*---------------------------------------------------------------------------------        
 ------------------------Load Opinion Poll--------------------------------------------
----------------------------------------------------------------------------------*/
 function loadopinionpoll(divID) {
            var cont = $('#filler-below');
				cont.load('communication.html #Poll', function(){
				console.log("inside Poll");			

				$('#Poll #tabscontent #CreatePoll').show();
				$('#Poll #tabscontent #ViewPoll').hide();
				
				cont = $('#Poll #tabs #Create');
				$(cont).hover(function(e){ 
					console.log("inside Create");
					$('#Poll #tabscontent #CreatePoll').show();
					$('#Poll #tabscontent #ViewPoll').hide();
					});			          
				cont = $('#Poll #tabs #View');
				$(cont).hover(function(e){ 
					console.log("inside View");
					$('#Poll #tabscontent #CreatePoll').hide();
					$('#Poll #tabscontent #ViewPoll').show();
					createcomplainttable();
					});			          
				});

        }

function createpolltable(){
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


/*---------------------------------------------------------------------------------        
 ------------------------Load Notice Board--------------------------------------------
----------------------------------------------------------------------------------*/
 function loadnoticeboard(divID) {
            var cont = $('#filler-below');
				cont.load('communication.html #NoticeBoard', function(){
				console.log("inside NoticeBoard");			

				$('#NoticeBoard #tabscontent #CreateNotice').show();
				$('#NoticeBoard #tabscontent #ViewNotice').hide();
				
				cont = $('#NoticeBoard #tabs #Create');
				$(cont).hover(function(e){ 
					console.log("inside Create");
					$('#NoticeBoard #tabscontent #CreateNotice').show();
					$('#NoticeBoard #tabscontent #ViewNotice').hide();
					});			          
				cont = $('#NoticeBoard #tabs #View');
				$(cont).hover(function(e){ 
					console.log("inside View");
					$('#NoticeBoard #tabscontent #CreateNotice').hide();
					$('#NoticeBoard #tabscontent #ViewNotice').show();
					createnoticetable();
					});			          
				});

        }

function createnoticetable(){
			     var tablecontents = "";
		    tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "NoticeID" + "</th>";
			  tablecontents += "<th>" + "Owner" + "</th>";
		      tablecontents += "<th>" + "Date" + "</th>";
		      tablecontents += "<th>" + "Subject" + "</th>";
			  tablecontents += "<th>" + "" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 15; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.transactionNum +"</td>";
			      tablecontents += "<td>" + jd.date + "</td>";
				  tablecontents += "<td>" + jd.fname + "</td>";
			      tablecontents += "<td>" + jd.Remarks + "</td>";
				  tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewReq(this)">' + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("noticetable").innerHTML = tablecontents;
				});
				
				$("#transvalue ").click(function(){
				alert("transaction value clicked");
});

}