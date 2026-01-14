const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (user) => {
//   console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - HELLO ", user);
});

const onlyOnceHandler = (user) => {
//   console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - ONLY ONCE ", user);
};

eventEmitter.once("onlyOnce", onlyOnceHandler);

// eventEmitter.emit("greet", 'Devansh')

// eventEmitter.emit("greet", console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - HELLO "));

eventEmitter.emit("onlyOnce", "Devansh");
eventEmitter.emit("greet", "Nisha");
eventEmitter.emit("greet", "Devansh 2");

// eventEmitter.removeListener("onlyOnce");
eventEmitter.once("onlyOnce", onlyOnceHandler);
// eventEmitter.removeAllListeners()


console.log('🟡🟡🟡 LOG 🟡🟡🟡 →  - ALL ', eventEmitter.listeners)