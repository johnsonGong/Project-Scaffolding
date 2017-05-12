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