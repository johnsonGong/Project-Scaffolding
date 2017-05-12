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

}(window));; /* [all files] */
/**
 * Dog.js
 *
 *
 */
;(function (window, undefined) {

   function Dog(){
       var name = "";
       var age = 28;
   }
   
   Dog.prototype._init = function(){};
   Dog.prototype.run = function(){
       console.log("This is a Dog -- animal, 4 legs, brave, lucky！");
   };
   Dog.prototype.stop = function(){};

}(window));