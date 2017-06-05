/**
 * Core.js. 核心功能插件.<br/>
 *
 *
 */
;define(function () {

    console.log("loading [Core.js]!");

    function Core() {
        var name = "";
    }

    Core.prototype = {
        _init: function () {},
        run: function () {
            console.log(" This is the Core -- support interfaces for 'BOOK DATA'. ");
        },
        stop: function () {},
        /**
         * 获取[目录]数据.
         *
         *
         */
        getCatalog: function () {
            console.log("获取[目录]数据。");
        }
    };

    return Core;

});