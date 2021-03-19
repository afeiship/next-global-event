/*!
 * name: @jswork/next-global-event
 * description: Window event for next.
 * homepage: https://github.com/afeiship/next-global-event
 * version: 1.0.1
 * date: 2021-03-19 17:22:53
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var NxGlobalEvent = nx.declare('nx.GlobalEvent', {
    statics: {
      on: function (inName, inHandler) {
        var handler = function (event) {
          var detail = event.detail;
          var type = event.type;
          inHandler({ type: type, data: detail });
        };

        global.addEventListener(inName, handler, false);

        return {
          destroy: function () {
            global.removeEventListener(inName, handler, false);
          }
        };
      },
      emit: function (inName, inData) {
        var event = new global.CustomEvent(inName, { detail: inData });
        global.dispatchEvent(event);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxGlobalEvent;
  }
})();
