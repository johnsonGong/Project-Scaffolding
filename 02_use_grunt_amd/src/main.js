//Load common code that includes config, then load the app logic for this page.
// requirejs(['./common','./app'], function () {
requirejs(['./common','./app'], function ( Comm, App ) {
    
    console.log("loading [main.js]");
    
    var one = new App();
    //requirejs(['app']);
});
