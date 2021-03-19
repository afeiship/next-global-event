(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var NxGlobalEvent = nx.declare('nx.GlobalEvent', {
    statics: {
      on: function (inName, inHandler) {
        global.addEventListener(inName, inHandler, false);
        return {
          destroy: function () {
            global.removeEventListener(inName, inHandler, false);
          }
        };
      },
      emit: function (inName, inData) {
        var event = new global.Event(inName, inData);
        global.dispatchEvent(event);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxGlobalEvent;
  }
})();
