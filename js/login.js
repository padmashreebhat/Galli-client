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
 
// 'counter' is an object with properties, which in this case happen to be
// methods.
 
counter.get(); // 0
counter.set( 3 );
counter.increment(); // 4
counter.increment(); // 5
