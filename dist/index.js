/*!
 * name: @jswork/next-global-event
 * description: Window event for next.
 * homepage: https://github.com/afeiship/next-global-event
 * version: 1.0.0
 * date: 2021-03-19 17:09:41
 * license: MIT
 */

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
