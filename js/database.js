/**********************************************************************************************************/
/*********************** HomeHelpers      *****************************************************************/
/**********************************************************************************************************/

/************************  View Window      *****************************************************************/

function CloseHHViewWindow() {
            $("#hhviewBox").hide();
            
        }

        function OpenHHViewWindow() {
            $("#hhviewBox").show();
        }

/************************Load Service Provider*****************************************************************/

       function loadHomeHelper(divID) {
		    console.log(divID);
		    
            var cont = $('#filler-below');
				cont.load('database.html #HomeHelpers', function(){
				console.log("inside loadHomeHelper");			
				$('#HomeHelpers #tabscontent #AddHomeHelper').show();
				$('#HomeHelpers #tabscontent #ViewHomeHelper').hide();
				$('#HomeHelpers #tabscontent #hhviewBox').hide();
				
				cont = $('#HomeHelpers #tabs #Create');
				$(cont).hover(function(e){ 
					console.log("inside tabheader1");
					$('#HomeHelpers #tabscontent #AddHomeHelper').show();
					$('#HomeHelpers #tabscontent #ViewHomeHelper').hide();
					});			          
							        
				     
				     cont = $('#HomeHelpers #tabs #View');
				$(cont).hover(function(e){ 
					console.log("inside tabheader2");
					$('#HomeHelpers #tabscontent #AddHomeHelper').hide();
					$('#HomeHelpers #tabscontent #ViewHomeHelper').show();
					CreateHHtable();
					});			    

				});

        }

/************************Service Provider Table    ***********************************************************/

function CreateHHtable(){
			  var tablecontents = "";
		      tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "HHID" + "</th>";
		      tablecontents += "<th>" + "Name" + "</th>";
		      tablecontents += "<th>" + "ContactNumber" + "</th>";
		      tablecontents += "<th>" + "Service" + "</th>";
		      tablecontents += "<th>" + "" + "</th>";
		      tablecontents += "<th>" + "" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 5; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.transactionNum +"</td>";
			      tablecontents += "<td>" + jd.fname + "</td>";
			      tablecontents += "<td>" + jd.phone + "</td>";
			      tablecontents += "<td>" + jd.service + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewHHDetails(this)">' + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "Edit" onClick="Javacsript:DeleteHHDetails(this)">' + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("hhtable").innerHTML = tablecontents;
				});
				

}

function ViewHHDetails(obj){
    /* Get SPIndex */
	var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("hhtable");
    var x = document.getElementById("hhtable").rows[index].cells;
    var HHid= x[0].innerHTML;
    var HHID="<h3>"+HHid+"</h3>";
    var HHAddress="103,Gorguntena PaLya, 3rd Cross,25th Main"
    /* Get Address, history other details from database */
      OpenHHViewWindow();
        $("#hhviewBox #hhID").html(HHID+"<br>");
        $("#hhviewBox #hhAdd").html(HHAddress+"<br>");
		$("#hhviewBox #hhphoto").html("<img id='theImg' src='images/maidindian.png'/>");

}

function DeleteHHDetails(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("hhtable");
    table.deleteRow(index);
}

function SearchHH(){
	alert("search for provided SP ID and display");
}
function StoreHHDetails(){
	alert("Store SP details in database");
}






/**********************************************************************************************************/
/*********************** Instructor *****************************************************************/
/**********************************************************************************************************/

/************************  View Window      *****************************************************************/

function CloseInstructorView() {
            $("#InsViewBox").hide();
            
        }

        function OpenInstructorView() {
            $("#InsViewBox").show();
        }

/************************Load Instructor Details*****************************************************************/

       function loadInstructorDetails(divID) {
		    console.log(divID);
		    
            var cont = $('#filler-below');
				cont.load('database.html #Instructor', function(){
				console.log("inside loadServiceProvider");			
				$('#Instructor #tabscontent #AddInstructorDetails').show();
				$('#Instructor #tabscontent #ViewInstructorDetails').hide();
				$('#Instructor #tabscontent #InsViewBox').hide();
				
				cont = $('#Instructor #tabs #Create');
				$(cont).hover(function(e){ 
					console.log("inside tabheader1");
					$('#Instructor #tabscontent #AddInstructorDetails').show();
					$('#Instructor #tabscontent #ViewInstructorDetails').hide();
					});			          
							        
				     
				     cont = $('#Instructor #tabs #View');
				$(cont).hover(function(e){ 
					console.log("inside tabheader2");
					$('#Instructor #tabscontent #AddInstructorDetails').hide();
					$('#Instructor #tabscontent #ViewInstructorDetails').show();
					CreateInstable();
					});			    

				});

        }

/************************Instructor Table    ***********************************************************/

function CreateInstable(){
			  var tablecontents = "";
		      tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "InstructorID" + "</th>";
		      tablecontents += "<th>" + "Name" + "</th>";
		      tablecontents += "<th>" + "ContactNumber" + "</th>";
		      tablecontents += "<th>" + "Service" + "</th>";
		      tablecontents += "<th>" + "" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 5; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.transactionNum +"</td>";
			      tablecontents += "<td>" + jd.fname + "</td>";
			      tablecontents += "<td>" + jd.phone + "</td>";
			      tablecontents += "<td>" + "Taekwondo" + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewInsDetails(this)">' + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("instable").innerHTML = tablecontents;
				});
}

function ViewInsDetails(obj){
    /* Get SPIndex */
	var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("instable");
    var x = document.getElementById("instable").rows[index].cells;
    var InsID= x[0].innerHTML;
    var INSID="<h3>"+InsID+"</h3>";
    var SPAddress="103,Gorguntena PaLya, 3rd Cross,25th Main"
    var InsQualification="Taekwondo BlackBelt from Cheeta Association"
    /* Get Address, history other details from database */
      OpenInstructorView();
        $("#InsViewBox #InsID").html(INSID+"<br>");
        $("#InsViewBox #InsAdd").html(SPAddress+"<br>");
		$("#InsViewBox #Insphoto").html("<img id='theImg' src='images/instructor.jpeg'/>");
		$("#InsViewBox #InsQulification").html(InsQualification+"<br>");

/*       viewContent="<h3>"+SPid+"</h3>";
       document.getElementById(("viewBox").innerHTML=viewContent;*/
       
}


function SearchIns(){
	alert("search for provided Instructor ID and display");
}

function StoreInsDetails(){
	alert("Store Instructor details in database");
}



        
/**********************************************************************************************************/
/*********************** Service Provider *****************************************************************/
/**********************************************************************************************************/

/************************  View Window      *****************************************************************/

function CloseViewWindow() {
            $("#viewBox").hide();
            
        }

        function OpenViewWindow() {
            $("#viewBox").show();
        }

/************************Load Service Provider*****************************************************************/

       function loadServiceProvider(divID) {
		    console.log(divID);
		    
            var cont = $('#filler-below');
				cont.load('database.html #ServiceProvider', function(){
				console.log("inside loadServiceProvider");			
				$('#ServiceProvider #tabscontent #AddServiceProvider').show();
				$('#ServiceProvider #tabscontent #ViewServiceProvider').hide();
				$('#ServiceProvider #tabscontent #viewBox').hide();
				
				cont = $('#ServiceProvider #tabs #Create');
				$(cont).hover(function(e){ 
					console.log("inside tabheader1");
					$('#ServiceProvider #tabscontent #AddServiceProvider').show();
					$('#ServiceProvider #tabscontent #ViewServiceProvider').hide();
					});			          
							        
				     
				     cont = $('#ServiceProvider #tabs #View');
				$(cont).hover(function(e){ 
					console.log("inside tabheader2");
					$('#ServiceProvider #tabscontent #AddServiceProvider').hide();
					$('#ServiceProvider #tabscontent #ViewServiceProvider').show();
					CreateSPtable();
					});			    

				});

        }

/************************Service Provider Table    ***********************************************************/

function CreateSPtable(){
			  var tablecontents = "";
		      tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "SPID" + "</th>";
		      tablecontents += "<th>" + "Name" + "</th>";
		      tablecontents += "<th>" + "ContactNumber" + "</th>";
		      tablecontents += "<th>" + "Service" + "</th>";
		      tablecontents += "<th>" + "" + "</th>";
		      tablecontents += "<th>" + "" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 5; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.transactionNum +"</td>";
			      tablecontents += "<td>" + jd.fname + "</td>";
			      tablecontents += "<td>" + jd.phone + "</td>";
			      tablecontents += "<td>" + jd.service + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "View" onClick="Javacsript:ViewSPDetails(this)">' + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "Delete" onClick="Javacsript:DeleteSPDetails(this)">' + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("sptable").innerHTML = tablecontents;
				});
				

}

function ViewSPDetails(obj){
    /* Get SPIndex */
	var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("sptable");
    var x = document.getElementById("sptable").rows[index].cells;
    var SPid= x[0].innerHTML;
    var SPID="<h3>"+SPid+"</h3>";
    var SPAddress="103,Gorguntena PaLya, 3rd Cross,25th Main"
    /* Get Address, history other details from database */
      OpenViewWindow();
	  	$("#theDiv").append("<img id='theImg' src='theImg.png'/>");
        $("#viewBox #SPID").html(SPID+"<br>");
        $("#viewBox #SPAdd").html(SPAddress+"<br>");
		$("#viewBox #spphoto").html("<img id='theImg' src='images/plumber.jpeg'/>");

/*       viewContent="<h3>"+SPid+"</h3>";
       document.getElementById(("viewBox").innerHTML=viewContent;*/
       
}

function DeleteSPDetails(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("sptable");
    table.deleteRow(index);
}

function SearchSP(){
	alert("search for provided SP ID and display");
}
function StoreSPDetails(){
	alert("Store SP details in database");
}


