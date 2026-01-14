const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("error", (errorMessage) => {
  console.error("🔴🔴🔴 LOG 🔴🔴🔴 →  ERROR - ", errorMessage);
});

eventEmitter.emit("error", new Error("Something went wrong"));
