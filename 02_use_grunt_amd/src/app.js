define(['components/Core', 'components/Message'], function (Core, Message) {

    var APP = function () {
        console.log("loading [app.js]");
        var readCore = new Core();
        readCore.run();

        console.log("[Message]:" + Message.WELCOME);
    };
    
    return APP;
    window.APP = APP;

});