/*---------------------------------------------------------------------------------        
 ------------------------Load group window--------------------------------------------
----------------------------------------------------------------------------------*/
 function loadcreategroup(divID) {
            var cont = $('#filler-below');
				cont.load('settings.html #settings', function(){
				CreateGroupTable();
				});
        }

function CreateGroupTable()
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
			      tablecontents += "<td>" + jd.groupname + "</td>";
			      tablecontents += "<td>" + jd.purpose + "</td>";
			      tablecontents += "<td>" + jd.emaillist + "</td>";
			      tablecontents += "<td>" + '<input type="button" class="tablebutton" value = "Delete" onClick="Javacsript:deleteFamilyMember(this)">' + "</td>";
			      tablecontents += "</tr>";
			   }
			   
			   tablecontents += "</table>";
			   document.getElementById("tablespace").innerHTML = tablecontents;
				});

}

function addGroupDetails()
 {
     var GroupName = document.getElementById("GroupName");
    var Description = document.getElementById("Description");
    var MailList = document.getElementById("MailList");
    var table = document.getElementById("tablespace");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= GroupName.value;
    row.insertCell(1).innerHTML= Description.value;
    row.insertCell(2).innerHTML= MailList.value;
    row.insertCell(3).innerHTML= '<input type="button" class="tablebutton" value = "Delete" onClick="Javacsript:deleteFamilyMember(this)">';
    
}
