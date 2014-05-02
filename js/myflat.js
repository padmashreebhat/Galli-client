		function loadresidentwin(divID) {
		    console.log(divID);
		    
            var cont = $('#filler-below');
				cont.load('Myflat.html #Residentwin', function(){
				console.log("inside finance residentwin");
          
        });
        }
        
        function loadtabmenuwin(divID) {
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
					});			    
				     
				     
				     cont = $('#Residentwin #tabs #vehicle');
				$(cont).hover(function(e){ 
					console.log("inside tabheader2");
					$('#Residentwin #tabscontent #myinfo').hide();
					$('#Residentwin #tabscontent #serviceprovider').hide();
					$('#Residentwin #tabscontent #apartment').hide();
					$('#Residentwin #tabscontent #family').hide();
					$('#Residentwin #tabscontent #vehicle').show();
					});			    

				});

        }


