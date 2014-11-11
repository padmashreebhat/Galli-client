function getlatestnbMessages(){
	//open database Communciation table
    var Command="GetNB";
    var retVal = $.Deferred();
	var email=getuserID();
 	var tablecontents = "";

 	tablecontents = "<table>";
	$.getJSON('communication.php?Command='+Command+'&username='+email,function(result){

		noticeboard = result[0];
		for(var i=0; i<noticeboard.length; i++){
			      tablecontents += "<tr>";
			      tablecontents += "<td onclick='ShownbDetails(this)'>" + noticeboard[i].lname + "</td>";
			      tablecontents += "</tr>";
		}
			   tablecontents += "</table>";
			   document.getElementById("nbtable").innerHTML = tablecontents;
	});
	
}

function ShownbDetails(row){
    Command="GetnbDetail";
    var retVal = $.Deferred();
	var nbrow=row.parentNode.rowIndex;
	$.getJSON('communication.php?Command='+Command+'&username='+email,function(result){
						
		});
        var cont = $('#filler-below');
		cont.load('communication.html #noticeboarddet #tabscontent', function(){
					
		var Subject= noticeboard[nbrow].lname;
		var id= noticeboard[nbrow].fname;
		var Detail= noticeboard[nbrow].age;
		var Compid="<h3>"+Compid+"</h3>";
		var CompDetails="Shower in Study is leaking ";
 
        $("#tabscontent #NoticeID").html(id+"<br>");
        $("#tabscontent #Subject").html(Subject+"<br>");
		$("#tabscontent #NoticeDet").html(Detail+"<br>");
	
 				$('#filler-below').show();
				});

				$('body').append('<div id="mask"></div>');
				$('#mask').fadeIn(300);
				
				

}
/*---------------------------------------------------------------------------------        
 ------------------------Quick Window related--------------------------------------
----------------------------------------------------------------------------------*/


function getMsgDetails(){
	alert("getting Msg Details");
	loadnoticeboard();
}
function getTotalPollcount(){
	var totalpollcount=8;
	return totalpollcount;
}
function getOpenPollcount(){
	var openpollcount=3;
	return openpollcount;
}

function loadopenpolltable(){
           var cont = $('#filler-below');
           var pollview="Open";
				cont.load('communication.html #Poll #tabscontent #ViewPoll', function(){
					createpolltable(pollview);
				});
				$('body').append('<div id="mask"></div>');
				$('#mask').fadeIn(300);
				$('#filler-below').show();

}
function loadclosepolltable(){
           var cont = $('#filler-below');
           var pollview="Closed";
				cont.load('communication.html #Poll #tabscontent #ViewPoll', function(){
					createpolltable(pollview);
				});
				$('body').append('<div id="mask"></div>');
				$('#mask').fadeIn(300);
				$('#filler-below').show();

}
function loadNBdetails(){
           var cont = $('#filler-below');
           var pollview="Open";
				cont.load('communication.html #noticeboarddet #tabscontent', function(){

				});
				$('body').append('<div id="mask"></div>');
				$('#mask').fadeIn(300);
				$('#filler-below').show();

}
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
				$('#filler-below').show();

        }

function createpolltable(pollview){
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
		      tablecontents += "<th>" + "Your Option" + "</th>";
		      if(pollview="Open")
		      {
			  tablecontents += "<th>" + "" + "</th>";
		      }
		      else
		      {
			      
		      }
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
			      if(pollview=="Open")
			      {
				  	 tablecontents += "<td>" + '<input type="text" value = "0" style="width:45px">'+ "</td>";
				  	 tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "Submit" onClick="Javacsript:ViewReq(this)">' + "</td>";    
			      }
			      else
			      {
				      tablecontents += "<td>" + '<input type="text" value = "0" style="width:45px">'+ "</td>";
			      }
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("polltable").innerHTML = tablecontents;
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

function CloseCompliantWindow() {
            $("#viewCompliantDetail").hide();
            
        }
function OpenCompliantWindow() {
            $("#viewCompliantDetail").show();
        }
function ViewCompliantWindow(obj){
		var index = obj.parentNode.parentNode.rowIndex;
		var table = document.getElementById("complianttable");
		var x = document.getElementById("complianttable").rows[index].cells;
		var Compid= x[0].innerHTML;
		var Compid="<h3>"+Compid+"</h3>";
		var CompDetails="Shower in Study is leaking "
    /* Get Address, history other details from database */
      OpenCompliantWindow();
        $("#viewCompliantDetail #CompNum").html(Compid+"<br>");
        $("#viewCompliantDetail #CompDet").html(CompDetails+"<br>");
}

/*function loadcompliantbox(divID)
{
var cont = $('#filler-below');
 				cont.load('communication.html #CompliantBox', function(){
});
 window.open("https://groups.google.com/forum/#!forum/gallitestqanda");
}*/
 function loadcompliantbox(divID) {
            var cont = $('#filler-below');
 				cont.load('communication.html #CompliantBox', function(){
				console.log("inside CompliantBox");			

				$('#CompliantBox #tabscontent #CreateCompliant').show();
				$('#CompliantBox #tabscontent #ViewCompliant').hide();
				           CloseCompliantWindow();
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
				
				$('body').append('<div id="mask"></div>');
				$('#mask').fadeIn(300);
				$('#filler-below').show();
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
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewCompliantWindow(this)">' + "</td>";
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
	var retVal = $.Deferred();
	var email=getuserID();
	var Subject=$('#CompliantBox #tabscontent #CreateCompliant #Subject').val();
	var Detail=$('#CompliantBox #tabscontent #CreateCompliant  #Detail').val();
	var Command="SubmitComplaint";
	
		$.getJSON('communication.php?Command='+Command+'&Subject='+Subject+'&Detail='+Detail+'&email='+email+'&Validity='+Validity,function(result){
		people = result[0];
		auth = result[1];

		console.log('Authentication is '+auth['username']+', '+auth['auth']);
		retVal.resolve(auth['auth']);
		
		// Process People Object 
		$('#phpout').empty();
		for(var i=0; i<people.length; i++){
			$('<div/>').text(people[i].lname).appendTo($('#phpout'));
			$('<div/>').text(people[i].fname).appendTo($('#phpout'));
			$('<div/>').text(people[i].age).appendTo($('#phpout'));
		}
	})
	.done(function( ) {
		console.log( "second success" );
	})
	.fail(function( ) {
    	console.log( "error" );
    	return false;
    })
	.always(function( ) {
    	console.log( "complete" );
    });

}


/*---------------------------------------------------------------------------------        
 ------------------------Load Notice Board--------------------------------------------
----------------------------------------------------------------------------------*/
function CloseNoticeDetailsWindow() {
            $("#viewNoticeDetail").hide();
            
        }
function OpenNoticeDetailsWindow() {
            $("#viewNoticeDetail").show();
        }
function ViewNoticeDetailsWindow(obj){
		var index = obj.parentNode.parentNode.rowIndex;
		var table = document.getElementById("noticetable");
		var x = document.getElementById("noticetable").rows[index].cells;
		var Noticeid= x[0].innerHTML;
		var Noticeid="<h3>"+Noticeid+"</h3>";
		var NoticeDetails="AGM is scheduled to be in August 2014, All residents are requested to be available"
    /* Get Address, history other details from database */
      OpenNoticeDetailsWindow();
        $("#viewNoticeDetail #NoticeNum").html(Noticeid+"<br>");
        $("#viewNoticeDetail #NoticeDet").html(NoticeDetails+"<br>");
}

 function loadnoticeboard(divID) {
            var cont = $('#filler-below');
				cont.load('communication.html #NoticeBoard', function(){
				console.log("inside NoticeBoard");			
				CloseNoticeDetailsWindow();
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
				$('body').append('<div id="mask"></div>');
				$('#mask').fadeIn(300);
				$('#filler-below').show();
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
				  tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewNoticeDetailsWindow(this)">' + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("noticetable").innerHTML = tablecontents;
				});
				
				$("#transvalue ").click(function(){
				alert("transaction value clicked");
});

}



function loadSMS(){
	           var cont = $('#filler-below');
				cont.load('communication.html #SMS', function(){
				console.log("inside SMS");			
					});	
				$('body').append('<div id="mask"></div>');
				$('#mask').fadeIn(300);
				$('#filler-below').show();
		          
}

/*---------------------------------------------------------------------------------        
 ------------------------Update Database with Noticeboard details--------------------------------------------
----------------------------------------------------------------------------------*/
function SubmitNotice(){
	alert("update info into database");
	var retVal = $.Deferred();
	var email=getuserID();
	var Subject=$('#NoticeBoard #tabscontent #CreateNotice #Subject').val();
	var Detail=$('#NoticeBoard #tabscontent #CreateNotice  #Detail').val();
	var Validity=$('#NoticeBoard #tabscontent #CreateNotice #Validity').val();
	var Command="SubmitNB";
	
		$.getJSON('communication.php?Command='+Command+'&Subject='+Subject+'&Detail='+Detail+'&email='+email+'&Validity='+Validity,function(result){
		people = result[0];
		auth = result[1];

		console.log('Authentication is '+auth['username']+', '+auth['auth']);
		retVal.resolve(auth['auth']);
		
		// Process People Object 
		$('#phpout').empty();
		for(var i=0; i<people.length; i++){
			$('<div/>').text(people[i].lname).appendTo($('#phpout'));
			$('<div/>').text(people[i].fname).appendTo($('#phpout'));
			$('<div/>').text(people[i].age).appendTo($('#phpout'));
		}
	})
	.done(function( ) {
		console.log( "second success" );
	})
	.fail(function( ) {
    	console.log( "error" );
    	return false;
    })
	.always(function( ) {
    	console.log( "complete" );
    });
    
    // Return the deferred object for listening
    Command="GetNB";
 	
	$.getJSON('database.php?username='+email,function(result){

		people = result[0];
		auth = result[1];

		console.log('Authentication is '+auth['username']+', '+auth['auth']);
		retVal.resolve(auth['auth']);
		
		// Process People Object 
		$('#phpout').empty();
		for(var i=0; i<people.length; i++){
			$('<div/>').text(people[i].lname).appendTo($('#phpout'));
			$('<div/>').text(people[i].fname).appendTo($('#phpout'));
			$('<div/>').text(people[i].age).appendTo($('#phpout'));
		}
	})
	.done(function( ) {
		console.log( "second success" );
	})
	.fail(function( ) {
    	console.log( "error" );
    	return false;
    })
	.always(function( ) {
    	console.log( "complete" );
    });
    
    // Return the deferred object for listening
	
    return retVal;
}
