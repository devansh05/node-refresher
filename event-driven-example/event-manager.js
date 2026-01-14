const EventEmitter = require("events");

class EventManager extends EventEmitter {
  sendMessage(msg) {
    console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  -  EVENT EMITTED ", msg);
    this.emit("messageReceived", msg);
  }
}

// to use this class
const eventManager = new EventManager();
// event handler & callback
eventManager.on("messageReceived", (msg) => {
  console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - LISTNER ", msg);
});

// to trigger the message
eventManager.sendMessage("This triggers the event.");
