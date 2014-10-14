function RegisterUser(){
		$('#tabscontent #login').hide();
		$('#tabscontent #register').show();
		RegiseterUserDetails();
}

function RegiseterUserDetails(){
	var loc = location.host;
	var retVal = $.Deferred();
	var useremail="fs@gmail.com";
	var AptNum="25B";
	$.getJSON('registeruser.php?useremail='+useremail+'&AptNumber='+AptNum,function(result){
		people = result[0];
		auth = result[1];

		console.log('Authentication is '+auth['username']+', '+auth['auth']);
		retVal.resolve(auth['auth']);
		
		// Process People Object 
		/*$('#phpout').empty();
		for(var i=0; i<people.length; i++){
			$('<div/>').text(people[i].lname).appendTo($('#phpout'));
			$('<div/>').text(people[i].fname).appendTo($('#phpout'));
			$('<div/>').text(people[i].age).appendTo($('#phpout'));
		}*/
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
(function() {
    var jQuery = { /* All my methods go here. */ };
    window.jQuery = jQuery;
})();


var initGlobalvariable = (function(){
  var googlelogininit = 0;
  var fblogininit=0;
 
  return {
    getfbloginstatus: function(){
      return i;
    },
    setfbloginstatus: function( val){
      return i;
    },
	getgoogleloginstatus: function(){
      return i;
    },

    setgoogleloginstatus: function( val ){
      i = val;
    },
    increment: function() {
      return ++i;
    }
  };
}());
 


