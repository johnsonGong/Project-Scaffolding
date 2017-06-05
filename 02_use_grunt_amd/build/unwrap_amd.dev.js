;(function() {
/**
 * Core.js. 核心功能插件.<br/>
 *
 *
 */
var components_Core, components_Message, app;
components_Core = function () {
  console.log('loading [Core.js]!');
  function Core() {
    var name = '';
  }
  Core.prototype = {
    _init: function () {
    },
    run: function () {
      console.log(' This is the Core -- support interfaces for \'BOOK DATA\'. ');
    },
    stop: function () {
    },
    /**
     * 获取[目录]数据.
     *
     *
     */
    getCatalog: function () {
      console.log('获取[目录]数据\u3002');
    }
  };
  return Core;
}();
components_Message = function () {
  var MESSAGE = {
    'WELCOME': '你好\uFF0C这里是XXX应用软件.',
    'WARN_0': '程序出现异常'
  };
  return MESSAGE;
}();
app = function (Core, Message) {
  var APP = function () {
    console.log('loading [app.js]');
    var readCore = new Core();
    readCore.run();
    console.log('[Message]:' + Message.WELCOME);
  };
  return APP;
  window.APP = APP;
}(components_Core, components_Message);
}());