
function submitdetails(infoType)
{
alert("I am inside submitdetails");
}
function myflat_StoreDetails(infoType)
{
 alert("Send details to database");
}

function myflat_CreateTable(tableType)
{
	switch(tableType)
	{
		case "Family":
		CreateFamilyTable();
		break;

		case "Vehicle":
		CreateVehicleTable();
		break;
		
		case "SP":
		CreateSPTable();
		break;
		
		default:
		break;
	}
}

function myflat_addRow(tableType)
{
	switch(tableType)
	{
		case "Family":
		addRowFamilyTable();
		break;

		case "Vehicle":
		addRowVehicleTable();
		break;

		default:
		break;
	}

}
function CreateSPTable()
{
		      var tablecontents = "";
		      tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "SPID Number" + "</th>";
		      tablecontents += "<th>" + "Name" + "</th>";
		      tablecontents += "<th>" + "Starttime" + "</th>";
		      tablecontents += "<th>" + "Endtime" + "</th>";
		      tablecontents += "<th>" + "Salary" + "</th>";
		      tablecontents += "<th>" + "FromDate" + "</th>";
		      tablecontents += "<th>" + "" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 3; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.SPID + "</td>";
			      tablecontents += "<td>" + jd.SPName + "</td>";
			      tablecontents += "<td>" + jd.Starttime + "</td>";
			      tablecontents += "<td>" + jd.Endtime + "</td>";
			      tablecontents += "<td>" + jd.Salary + "</td>";
			      tablecontents += "<td>" + jd.FromDate + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "Delete" onClick="Javacsript:deleteSP(this)">' + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("myserviceprovidertable").innerHTML = tablecontents;
				});

}

function CreateVehicleTable()
{
		      var tablecontents = "";
		      tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "VehicleType" + "</th>";
		      tablecontents += "<th>" + "RegNumber" + "</th>";
		      tablecontents += "<th>" + "" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 3; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.VehicleType + "</td>";
			      tablecontents += "<td>" + jd.RegNumber + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "Delete" onClick="Javacsript:deleteVehicle(this)">' + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("myvehicletable").innerHTML = tablecontents;
				});

}

function CreateFamilyTable()
{
		      var tablecontents = "";
		      tablecontents = "<table>";
		      tablecontents += "<tr>";
		      tablecontents += "<th>" + "GroupName" + "</th>";
		      tablecontents += "<th>" + "Description" + "</th>";
		      tablecontents += "<th>" + "MailList" + "</th>";
		      tablecontents += "<th>" + "" + "</th>";
		      tablecontents += "</tr>";
		
		/* Read content from JSON file and update the same */
			  $.getJSON('JSON/result.json', function(jd) { 
			  for (var i = 0; i < 3; i ++)
			   {
			      tablecontents += "<tr>";
			      tablecontents += "<td>" + jd.fname + "</td>";
			      tablecontents += "<td>" + jd.age + "</td>";
			      tablecontents += "<td>" + jd.relation + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "Delete" onClick="Javacsript:deleteFamilyMember(this)">' + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("tablespace").innerHTML = tablecontents;
				});

}


function addRowSPTable() {
     var SpId = document.getElementById("SpId");
     var name = "Basamma";
    var Starttime = document.getElementById("Starttime");
     var Endtime = document.getElementById("Endtime");
    var Salary = document.getElementById("Salary");
    var FromDate = document.getElementById("FromDate");
      var table = document.getElementById("myserviceprovidertable");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= SpId.value;
	row.insertCell(1).innerHTML= name.value;
    row.insertCell(2).innerHTML= Starttime.value;
     row.insertCell(3).innerHTML= Endtime.value;
    row.insertCell(4).innerHTML= Salary.value;
    row.insertCell(5).innerHTML= FromDate.value;
    row.insertCell(6).innerHTML= '<input type="button" class="tablebutton" value = "Delete" onClick="Javacsript:deleteSP(this)">';
    
}



function addRowFamilyTable() {
     var myName = document.getElementById("name");
    var age = document.getElementById("age");
    var relation = document.getElementById("relation");
    var table = document.getElementById("tablespace");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= myName.value;
    row.insertCell(1).innerHTML= age.value;
    row.insertCell(2).innerHTML= relation.value;
    row.insertCell(3).innerHTML= '<input type="button" class="tablebutton" value = "Delete" onClick="Javacsript:deleteFamilyMember(this)">';
    
}



function addRowVehicleTable() {
     var VehicleType = document.getElementById("VehicleType");
    var RegNumber = document.getElementById("RegNumber");
    var table = document.getElementById("myvehicletable");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= VehicleType.value;
    row.insertCell(1).innerHTML= RegNumber.value;
    row.insertCell(2).innerHTML= '<input type="button" class="tablebutton" value = "Delete" onClick="Javacsript:deleteVehicle(this)">';
    
}
 
function deleteVehicle(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myvehicletable");
    table.deleteRow(index);
    
}
 
function deleteFamilyMember(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("tablespace");
    table.deleteRow(index);
    
}

function deleteSP(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myserviceprovidertable");
    table.deleteRow(index);
    
}



	/*	function loadresidentwin(divID) {
		    console.log(divID);
		    
            var cont = $('#filler-below');
				cont.load('Myflat.html #Residentwin', function(){
				console.log("inside finance residentwin");
          
        });
        }*/
        
        function loadresidentwin(divID) {
		    console.log(divID);
		    
            var cont = $('#filler-below');
				cont.load('tabmenu.html #tabContainer', function(){
				console.log("inside homehelperswin");			

				$('#tabContainer #tabscontent #tabpage_1').show();
				$('#tabContainer #tabscontent #tabpage_2').hide();
				$('#tabContainer #tabscontent #tabpage_3').hide();
				
				cont = $('#tabContainer #tabs #Personnel');
				$(cont).hover(function(e){ 
					console.log("inside tabheader1");
					$('#tabContainer #tabscontent #tabpage_1').show();
					$('#tabContainer #tabscontent #tabpage_2').hide();
					$('#tabContainer #tabscontent #tabpage_3').hide();
					});			          
							        
				cont = $('#tabContainer #tabs #ServiceProvider');
				$(cont).hover(function(e){ 
					console.log("inside tabheader2");
					$('#tabContainer #tabscontent #tabpage_1').hide();
					$('#tabContainer #tabscontent #tabpage_2').show();
					$('#tabContainer #tabscontent #tabpage_3').hide();
					});			          
				

				cont = $('#tabContainer #tabs #MyProfile');
				$(cont).hover(function(e){ 
					console.log("inside tabheader3");
					$('#tabContainer #tabscontent #tabpage_1').hide();
					$('#tabContainer #tabscontent #tabpage_2').hide();
					$('#tabContainer #tabscontent #tabpage_3').show();
					});			          
				});
				$('#filler-below').show();
        }

 function loadhomehelperswin(divID) {
		    console.log(divID);
		    
            var cont = $('#filler-below');
				cont.load('tabmenu.html #homehelpers', function(){
				console.log("inside homehelperswin");			

				$('#homehelpers #tabscontent #homehelp').show();
				$('#homehelpers #tabscontent #driver').hide();
				
				cont = $('#homehelpers #tabs #homehelp');
				$(cont).hover(function(e){ 
					console.log("inside homehelp");
					$('#homehelpers #tabscontent #homehelp').show();
					$('#homehelpers #tabscontent #driver').hide();
					});			          
							        
				cont = $('#homehelpers #tabs #driver');
				$(cont).hover(function(e){ 
					console.log("inside driver");
					$('#homehelpers #tabscontent #homehelp').hide();
					$('#homehelpers #tabscontent #driver').show();
					});			          
				});
        }


       function loadmyinfo(divID) {
		    console.log(divID);
		    
            var cont = $('#filler-below');
				cont.load('Myflat.html #Residentwin', function(){
				console.log("inside myinfo");			
				$('#Residentwin #tabscontent #myinfo').show();
				$('#Residentwin #tabscontent #serviceprovider').hide();
				$('#Residentwin #tabscontent #apartment').hide();
				$('#Residentwin #tabscontent #family').hide();
				$('#Residentwin #tabscontent #vehicle').hide();
				
				cont = $('#Residentwin #tabs #myinfo');
				$(cont).hover(function(e){ 
					console.log("inside tabheader1");
					$('#Residentwin #tabscontent #myinfo').show();
					$('#Residentwin #tabscontent #serviceprovider').hide();
					$('#Residentwin #tabscontent #Apartment').hide();
					$('#Residentwin #tabscontent #family').hide();
					$('#Residentwin #tabscontent #vehicle').hide();
					});			          
							        
				cont = $('#Residentwin #tabs #serviceprovider');
				$(cont).hover(function(e){ 
					console.log("inside tabheader2");
					$('#Residentwin #tabscontent #myinfo').hide();
					$('#Residentwin #tabscontent #serviceprovider').show();
					$('#Residentwin #tabscontent #apartment').hide();
					$('#Residentwin #tabscontent #family').hide();
					$('#Residentwin #tabscontent #vehicle').hide();
					myflat_CreateTable("SP");
					});			          
				     
				     cont = $('#Residentwin #tabs #apartment');
				$(cont).hover(function(e){ 
					console.log("inside tabheader2");
					$('#Residentwin #tabscontent #myinfo').hide();
					$('#Residentwin #tabscontent #serviceprovider').hide();
					$('#Residentwin #tabscontent #apartment').show();
					$('#Residentwin #tabscontent #family').hide();
					$('#Residentwin #tabscontent #vehicle').hide();
					});			    
					
					
					cont = $('#Residentwin #tabs #family');
				$(cont).hover(function(e){ 
					console.log("inside tabheader2");
					$('#Residentwin #tabscontent #myinfo').hide();
					$('#Residentwin #tabscontent #serviceprovider').hide();
					$('#Residentwin #tabscontent #apartment').hide();
					$('#Residentwin #tabscontent #family').show();
					$('#Residentwin #tabscontent #vehicle').hide();
					myflat_CreateTable("Family");
					});			    
				     
				     
				     cont = $('#Residentwin #tabs #vehicle');
				$(cont).hover(function(e){ 
					console.log("inside tabheader2");
					$('#Residentwin #tabscontent #myinfo').hide();
					$('#Residentwin #tabscontent #serviceprovider').hide();
					$('#Residentwin #tabscontent #apartment').hide();
					$('#Residentwin #tabscontent #family').hide();
					$('#Residentwin #tabscontent #vehicle').show();
					myflat_CreateTable("Vehicle");
					});			    

				});
				$('#filler-below').show();

        }


