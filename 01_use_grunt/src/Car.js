/**
 * Car.js
 *
 *
 */
;(function (window, undefined) {

   function Car(){
       var name = "";
   }
   
   Car.prototype._init = function(){};
   Car.prototype.run = function(){
       console.log("This is a car -- 4 wheels, engine, oil");
   };
   Car.prototype.stop = function(){};

}(window));