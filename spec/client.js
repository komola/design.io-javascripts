(function() {
  window.designer = new DesignIO({
    port: 4181
  });
  designer.on("log", function(msg) {
    var message, string, _i, _len, _ref;
    if (typeof msg === "string") {
      return console.log(msg);
    } else {
      switch (msg.type) {
        case "spec":
          if (msg.messages.length > 0) {
            string = msg.name;
            string += "\n";
            _ref = msg.messages;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              message = _ref[_i];
              string += "" + message.message + "\n";
            }
            return console.log(string);
          }
          break;
        default:
          return "";
      }
    }
  });
}).call(this);
