
/*---------------------------------------------------------------------------------        
 ------------------------Load Opinion Poll--------------------------------------------
----------------------------------------------------------------------------------*/
 function loadopinionpoll(divID) {
            var cont = $('#filler-below');
				cont.load('communication.html #Poll', function(){
				console.log("inside Poll");			

				$('#Poll #tabscontent #CreatePoll').show();
				$('#Poll #tabscontent #ViewPoll').hide();
				$('#Poll #tabscontent #PollResult').hide();
				
				cont = $('#Poll #tabs #Create');
				$(cont).hover(function(e){ 
					console.log("inside Create");
					$('#Poll #tabscontent #CreatePoll').show();
					$('#Poll #tabscontent #ViewPoll').hide();
					$('#Poll #tabscontent #PollResult').hide();
					});			          
				cont = $('#Poll #tabs #View');
				$(cont).hover(function(e){ 
					console.log("inside View");
					$('#Poll #tabscontent #CreatePoll').hide();
					$('#Poll #tabscontent #ViewPoll').show();
					$('#Poll #tabscontent #PollResult').hide();
					createpolltable();
					});		
				cont = $('#Poll #tabs #Results');
				$(cont).hover(function(e){ 
					console.log("inside View");
					$('#Poll #tabscontent #CreatePoll').hide();
					$('#Poll #tabscontent #ViewPoll').hide();
					$('#Poll #tabscontent #PollResult').show();
					createpollresulttable();
					});			      	          
				});

        }

function createpolltable(){
			  var tablecontents = "";
		      tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "PollID" + "</th>";
		      tablecontents += "<th>" + "ValidUpto" + "</th>";
		      tablecontents += "<th>" + "Subject" + "</th>";
		      tablecontents += "<th>" + "Option1" + "</th>";
		      tablecontents += "<th>" + "Option2" + "</th>";
		      tablecontents += "<th>" + "Option3" + "</th>";
		      tablecontents += "<th>" + "Option4" + "</th>";
		      tablecontents += "<th>" + "Option5" + "</th>";
		      tablecontents += "<th>" + "Status" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 5; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.transactionNum +"</td>";
			      tablecontents += "<td>" + jd.date + "</td>";
			      tablecontents += "<td>" + jd.Remarks + "</td>";
			      tablecontents += "<td>" + jd.fname+ "</td>";
			      tablecontents += "<td>" + jd.fname+ "</td>";
			      tablecontents += "<td>" + jd.fname+ "</td>";
			      tablecontents += "<td>" + jd.fname+ "</td>";
			      tablecontents += "<td>" + jd.fname+ "</td>";
			      tablecontents += "<td>" + '<input type="text" value = "0" style="width:45px">'+ "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("polltable").innerHTML = tablecontents;
				});
				
				$("#transvalue ").click(function(){
				alert("transaction value clicked");
});

}


function createpollresulttable(){
			  var tablecontents = "";
		      tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "PollID" + "</th>";
		      tablecontents += "<th>" + "ValidUpto" + "</th>";
		      tablecontents += "<th>" + "Subject" + "</th>";
		      tablecontents += "<th>" + "Option1" + "</th>";
		      tablecontents += "<th>" + "Option2" + "</th>";
		      tablecontents += "<th>" + "Option3" + "</th>";
		      tablecontents += "<th>" + "Option4" + "</th>";
		      tablecontents += "<th>" + "Option5" + "</th>";
		      tablecontents += "<th>" + "Option" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 5; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.transactionNum +"</td>";
			      tablecontents += "<td>" + jd.date + "</td>";
			      tablecontents += "<td>" + jd.Remarks + "</td>";
			      tablecontents += "<td>" + jd.pollnum+ "</td>";
			      tablecontents += "<td>" + jd.pollnum+ "</td>";
			      tablecontents += "<td>" + jd.pollnum+ "</td>";
			      tablecontents += "<td>" + jd.pollnum+ "</td>";
			      tablecontents += "<td>" + jd.pollnum+ "</td>";
			      tablecontents += "<td>" + jd.status+ "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("pollresulttable").innerHTML = tablecontents;
				});
				
				$("#transvalue ").click(function(){
				alert("transaction value clicked");
});

}



function VoiceOpinion(){
    /*Submit opinion and store in database */
	alert("Submit opinion and store in database");
}

function SearchPoll(){
	/* Search for poll details and update */
	alert("Search for poll details and update");
}

function RegisterPoll(){
	/* Register  poll details*/
	alert("Register  poll details");
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
			  for (var i = 0; i < 10; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.transactionNum +"</td>";
			      tablecontents += "<td>" + jd.date + "</td>";
			      tablecontents += "<td>" + jd.Remarks + "</td>";
			      tablecontents += "<td>" + jd.fname+ "</td>";
			      tablecontents += "<td>" + '<input type="text" value = "Open" style="width:60px">'+ "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewReq(this)">' + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "Update" onClick="Javacsript:ViewReq(this)">' + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("complianttable").innerHTML = tablecontents;
				});
				
				$("#transvalue ").click(function(){
				alert("transaction value clicked");
});

}



function RegisterComplaint(){
    /*Register Compliant */
	alert("Register complaint and store in database");
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
			  tablecontents += "<th>" + "Owner" + "</th>";
		      tablecontents += "<th>" + "Date" + "</th>";
		      tablecontents += "<th>" + "Subject" + "</th>";
			  tablecontents += "<th>" + "" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 10; i ++)
			   {
			      tablecontents += "<tr>";
				  tablecontents += "<td>" + jd.fname + "</td>";
			      tablecontents += "<td>" + jd.date + "</td>";
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

function SubmitNotice(){
	alert("update info into database");
}


function loadSMS(){
	           var cont = $('#filler-below');
				cont.load('communication.html #SMS', function(){
				console.log("inside SMS");			
					});			          
}